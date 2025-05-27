import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno';
import EditarAlumno from '../pages/EditarAlumno';
import DetalleAlumno from '../pages/DetalleAlumno';
import Nosotros from '../pages/Nosotros'; 

function AppRouter({ alumnos, onAgregarSubmit, onEditarSubmit, onEliminar }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/ListaAlumnos" 
          element={<ListaAlumnos alumnos={alumnos} onEliminar={onEliminar} />}
        />
        <Route
          path="/NuevoAlumno" 
          element={<NuevoAlumno onAgregarSubmit={onAgregarSubmit} />}
        />
        <Route
          path="/EditarAlumno/:lu" 
          element={<EditarAlumno alumnos={alumnos} onEditarSubmit={onEditarSubmit} />}
        />
        <Route
          path="/Nosotros" 
          element={<Nosotros />}
        /> 
        <Route path="/DetalleAlumno/:lu" 
        element={<DetalleAlumno alumnos={alumnos} />} 
        />

      </Route>
    </Routes>
  );
}

export default AppRouter;