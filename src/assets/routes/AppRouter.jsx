import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AlumnoCard from '../components/AlumnoCard';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AlumnoCard" element={<AlumnoCard />} />
      <Route path="/ListaAlumnos" element={<ListaAlumnos />} />
      <Route path="/NuevoALumno" element={<NuevoAlumno />} />
    </Routes>
  )
}



export default AppRouter;