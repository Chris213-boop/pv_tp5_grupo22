import { Routes, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";

import AlumnoFormulario from './AlumnoFormulario';
import AlumnoDelete from './AlumnoDelete';
import EditarAlumno from './EditarAlumno';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import MostrarListaAlumnos from '../pages/MostrarListaAlumnos';
import BuscarAlumnoPage from './BuscarAlumnoPage';

import useAlumnos from '../hooks/useAlumnos';

function App() {
  const {
    alumnos,
    handleAgregarAlumno,
    deshabilitarAlumno,
    actualizarAlumno
  } = useAlumnos();

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid className="mt-4 bg-primary text-white p-4 rounded-3">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/agregar">Agregar Alumno</Nav.Link>
          <Nav.Link as={Link} to="/buscar">Buscar Alumno</Nav.Link>
          <Nav.Link as={Link} to="/eliminar">Eliminar</Nav.Link>
          <Nav.Link as={Link} to="/editar">Editar Alumno</Nav.Link>
          <Nav.Link as={Link} to="/listar">Listar</Nav.Link>
          <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
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