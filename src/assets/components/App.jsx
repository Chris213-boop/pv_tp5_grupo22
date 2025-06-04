import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";

import AlumnoFormulario from './AlumnoFormulario';
import AlumnoDelete from './AlumnoDelete';
import EditarAlumno from './EditarAlumno';
import Home from './Home';
import Nosotros from './Nosotros';

import MostrarListaAlumnos from './MostrarListaAlumnos';

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [noEncontrado, setNoEncontrado] = useState(false);




  useEffect(() => {
    if (alumnos.length > 0) {
      console.log("Lista de alumnos actualizada:", alumnos);
    }
  }, [alumnos]);

  const handleAgregarAlumno = useCallback((nuevoAlumno) => {
    setAlumnos(prev => [...prev, nuevoAlumno]);
  }, []);

  const deshabilitarAlumno = useCallback((valorBusqueda) => {
    const valor = valorBusqueda.toLowerCase().trim();
    let encontrado = false;

    setAlumnos(prev =>
      prev.map(alumno => {
        const luMatch = alumno.lu.toString() === valor;
        const nombreMatch = alumno.nombre?.toLowerCase() === valor;
        const apellidoMatch = alumno.apellido?.toLowerCase() === valor;

        if ((luMatch || nombreMatch || apellidoMatch) && alumno.estado !== false) {
          encontrado = true;
          return { ...alumno, estado: false };
        }

        return alumno;
      })
    );

    return encontrado;
  }, []);

  const actualizarAlumno = useCallback((alumnoActualizado) => {
    setAlumnos(prev =>
      prev.map(alumno =>
        alumno.lu === alumnoActualizado.lu
          ? { ...alumno, ...alumnoActualizado }
          : alumno
      )
    );
  }, []);

  // const buscarAlumno = useCallback((termino) => {
  //   const resultado = alumnos.filter(alumno => {
  //     const idMatch = alumno.id.toString() === termino;
  //     const nombreMatch = alumno.nombre.toLowerCase().includes(termino.toLowerCase());
  //     const marcaMatch = alumno.marca && alumno.marca.toLowerCase().includes(termino.toLowerCase());
  //     return (idMatch || nombreMatch || marcaMatch) && alumno.estado === true;
  //   });

  //   setNoEncontrado(resultado.length === 0);
  //   setResultados(resultado);
  // }, [alumnos]);

  // const resetNoEncontrado = () => setNoEncontrado(false);

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="mt-4">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as= {Link} to="/agregar">Agregar Alumno</Nav.Link>
          <Nav.Link as= {Link} to="/buscar">Buscar Alumno</Nav.Link>
          <Nav.Link as= {Link} to="/eliminar">Eliminar</Nav.Link>
          <Nav.Link as= {Link} to="/editar">Editar Alumno</Nav.Link>
          <Nav.Link as= {Link} to="/listar">Listar</Nav.Link>
          <Nav.Link as= {Link} to="/nosotros">Nosotros</Nav.Link>
        </Container>
      </Navbar>

      <main className='contenedor-formularios'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar" element={<AlumnoFormulario onAddAlumno={handleAgregarAlumno} />} />
          {/* <Route path="/buscar" element={
            <SearchResults
              buscarAlumno={buscarAlumno}
              resultados={resultados}
              noEncontrado={noEncontrado}
              resetNoEncontrado={resetNoEncontrado}
            />} 
          /> */}
          <Route path="/eliminar" element={<AlumnoDelete onDelete={deshabilitarAlumno} />} />
          <Route path="/editar" element={<EditarAlumno alumnos={alumnos} onUpdate={actualizarAlumno} />} />
          <Route path="/listar" element={<MostrarListaAlumnos alumnos={alumnos} />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;