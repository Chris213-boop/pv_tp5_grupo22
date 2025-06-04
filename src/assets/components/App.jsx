import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import AlumnoFormulario from './AlumnoFormulario';
import AlumnoDelete from './AlumnoDelete';
import EditarAlumno from './EditarAlumno';

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
      <header>
        <nav className='nav'>
          <Link to="/">Inicio</Link>
          <Link to="/agregar">Agregar</Link>
          <Link to="/buscar">Buscar</Link>
          <Link to="/eliminar">Eliminar</Link>
          <Link to="/editar">Editar</Link>
          <Link to="/listar">Listar</Link>
        </nav>
      </header>

      <main className='contenedor-formularios'>
        <Routes>
          <Route path="/" element={<h2>Bienvenido a la gestión de Alumnos</h2>} />
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
        </Routes>
      </main>
    </div>
  );
}

export default App;