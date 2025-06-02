import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import MostrarListaAlumnos from '../pages/MostrarListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno';
import EditarAlumno from '../pages/EditarAlumno';
import DetalleAlumno from '../pages/DetalleAlumno';
import Nosotros from '../pages/Nosotros'; 
import AlumnoFormulario from '../components/AlumnoFormulario'

function AppRouter({ alumnos, agregarAlumno, actualizarAlumno, eliminarAlumno }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/MostrarListaAlumnos" 
          element={<MostrarListaAlumnos alumnos={alumnos} eliminarAlumno={eliminarAlumno} />}
        />
        <Route
          path="/AlumnoFormulario" 
          element={<AlumnoFormulario alumnos={alumnos} eliminarAlumno={eliminarAlumno} />}
        />
        <Route
          path="/NuevoAlumno" 
          element={<NuevoAlumno agregarAlumno={agregarAlumno} />}
        />
        <Route
          path="/EditarAlumno/:lu" 
          element={<EditarAlumno alumnos={alumnos} actualizarAlumno={actualizarAlumno} />}
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