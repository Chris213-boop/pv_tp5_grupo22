import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AlumnoForm from '../components/AlumnoForm';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ListaAlumno" element={<ListaAlumnos />} />
      <Route path="/AlumnoForm" element={<AlumnoForm />} />
      <Route path="/NuevoALumno" element={<NuevoAlumno />} />
    </Routes>
  )
}



export default AppRouter;