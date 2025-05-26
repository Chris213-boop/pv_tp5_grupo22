import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ListaAlumnos from '../pages/ListaAlumnos';
import NuevoAlumno from '../pages/NuevoAlumno';
import EditarAlumno from '../pages/EditarAlumno';
// Considera crear un componente específico para la página "Nosotros", por ejemplo:
// import NosotrosPage from '../pages/NosotrosPage';
import AlumnoCard from '../components/AlumnoCard'; // O el componente que decidas usar para /nosotros

/*
  Sugerencia de organización (opcional para el futuro):
  Considera mover este archivo AppRouter.jsx a una ubicación más convencional como
  src/router/AppRouter.jsx o src/routes/AppRouter.jsx.
  Si lo haces, recuerda actualizar las rutas relativas de importación dentro de este
  archivo y donde sea que importes AppRouter.
*/

function AppRouter({ alumnos, onAgregarSubmit, onEditarSubmit, onEliminar }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/lista-alumnos" // Ruta en minúsculas y kebab-case
          element={<ListaAlumnos alumnos={alumnos} onEliminar={onEliminar} />}
        />
        <Route
          path="/nuevo-alumno"  // Ruta en minúsculas y kebab-case
          element={<NuevoAlumno onAgregarSubmit={onAgregarSubmit} />}
        />
        <Route
          path="/editar-alumno/:lu" // Ruta en minúsculas y kebab-case, :lu es el parámetro dinámico
          element={<EditarAlumno alumnos={alumnos} onEditarSubmit={onEditarSubmit} />}
        />
        <Route
          path="/nosotros" // Ruta en minúsculas.
          // Revisa si AlumnoCard es el componente más adecuado para esta página.
          // Podrías usar un componente como <NosotrosPage /> si lo creas.
          element={<AlumnoCard />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;