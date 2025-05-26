import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AlumnoForm from '../components/AlumnoForm';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ListaAlumnos" element={<ListaAlumnos/>} />
        <Route path="/NuevoALumno" element={< NuevoAlumno/>} />
        <Route path="/Nosotros" element={<AlumnoCard />} />
      </Route>
    </Routes>
  )
}



export default AppRouter;