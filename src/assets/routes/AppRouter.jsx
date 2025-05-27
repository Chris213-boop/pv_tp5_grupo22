import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AlumnoForm from '../components/AlumnoForm';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno';
import EditarAlumno from '../pages/EditarAlumno';
import DetalleAlumno from '../pages/DetalleAlumno';
import AlumnoCard from '../components/AlumnoCard'; 

function AppRouter({ alumnos, onAgregarSubmit, onEditarSubmit, onEliminar }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/lista-alumnos" 
          element={<ListaAlumnos alumnos={alumnos} onEliminar={onEliminar} />}
        />
        <Route
          path="/nuevo-alumno" 
          element={<NuevoAlumno onAgregarSubmit={onAgregarSubmit} />}
        />
        <Route
          path="/editar-alumno/:lu" 
          element={<EditarAlumno alumnos={alumnos} onEditarSubmit={onEditarSubmit} />}
        />
        <Route
          path="/nosotros" 
          element={<AlumnoCard />}
        />
        <Route path="/detalle-alumno/:" 
        element={<DetalleAlumno alumnos={alumnos} />} 
        />

      </Route>
    </Routes>
  );
}

export default AppRouter;