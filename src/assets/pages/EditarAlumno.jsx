import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';

const EditarAlumnoPage = ({ alumnos, onEditarSubmit }) => {
  const { lu } = useParams(); 
  const navigate = useNavigate();

  const alumnoAEditar = alumnos.find(alumno => alumno.Lu === lu);
  if (!alumnoAEditar) {
    console.warn(`Alumno con LU "${lu}" no encontrado para editar.`);
    return <Navigate to="/ListaAlumnos" replace />;
  }

  const handleSubmitEdicion = (datosAlumnoActualizado) => {
    onEditarSubmit(alumnoAEditar.Lu, datosAlumnoActualizado);
    navigate('/ListaAlumnos');
  };

  return (
    <div>
      <h2>Editar Alumno: {alumnoAEditar.nombre} {alumnoAEditar.apellido}</h2>
      <AlumnoForm
        initialData={alumnoAEditar}
        onSubmitForm={handleSubmitEdicion}
        isEditMode={true} 
      />
    </div>
  );
};

export default EditarAlumnoPage;