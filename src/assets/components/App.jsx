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
import BuscarAlumnoPage from './BuscarAlumnoPage';
import BuscarAlumno from './BuscarAlumno';


function App() {
  const [alumnos, setAlumnos] = useState([]);
 
  useEffect(() => {
    if (alumnos.length > 0) {
      console.log("Lista de alumnos actualizada:", alumnos);
    }
  }, [alumnos]);

  const handleAgregarAlumno = useCallback((nuevoAlumno) => {
    setAlumnos(prev => [...prev, nuevoAlumno]);
  }, []);

  const deshabilitarAlumno = useCallback((valorBusqueda) => {
    const alumnoEncontrado = BuscarAlumno(alumnos, valorBusqueda);

    if(alumnoEncontrado && alumnoEncontrado.estado !== false) {
      setAlumnos(prev =>
        prev.map(alumno =>
          alumno === alumnoEncontrado ? {...alumno, estado: false } : alumno
        )
      );
      return true;
  }
  return false;
  }, [alumnos]);


  const actualizarAlumno = useCallback((alumnoActualizado) => {
    setAlumnos(prev =>
      prev.map(alumno =>
        alumno.lu === alumnoActualizado.lu
          ? { ...alumno, ...alumnoActualizado }
          : alumno
      )
    );
  }, []);


  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid className="mt-4 bg-primary text-white p-4 rounded-3">
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
          <Route path="/buscar" element={<BuscarAlumnoPage alumnos={alumnos} />} 
          />
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