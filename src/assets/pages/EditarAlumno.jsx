import { useParams, useNavigate, Navigate } from 'react-router-dom';
import ListaAlumnosExistentes from '../components/ListaAlumnosExistentes';

const EditarAlumno = ({ alumnos, actualizarAlumno }) => {
  const { lu } = useParams(); 
  const navigate = useNavigate();

  const alumnoAEditar = alumnos.find(alumno => alumno.Lu === lu);
  if (!alumnoAEditar) {
    console.warn(`Alumno con LU "${lu}" no encontrado para editar.`);
    return <Navigate to="/MostrarListaAlumnos" replace />;
  }

  const actualizarDatosAlumno = (datosAlumnoActualizado) => {
    actualizarAlumno(alumnoAEditar.Lu, datosAlumnoActualizado);
    navigate('/MostrarListaAlumnos');
  };

  return (
    <div>
      <h2>Editar Alumno: {alumnoAEditar.nombre} {alumnoAEditar.apellido}</h2>
      <ListaAlumnosExistentes
        initialData={alumnoAEditar}
        onSubmitForm={actualizarDatosAlumno}
        isEditMode={true} 
      />
    </div>
  );
};

export default EditarAlumno;