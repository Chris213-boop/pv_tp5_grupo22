import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm'; // Asegúrate que la ruta a AlumnoForm sea correcta

const EditarAlumnoPage = ({ alumnos, onEditarSubmit }) => {
  const { lu } = useParams(); // Obtiene el 'lu' de la URL (debe coincidir con el parámetro en AppRouter)
  const navigate = useNavigate();

  // Encuentra el alumno a editar basado en el 'lu'
  const alumnoAEditar = alumnos.find(alumno => alumno.Lu === lu);

  // Si el alumno no se encuentra, redirige a la lista de alumnos
  // Podrías mostrar un mensaje de "No encontrado" más elaborado aquí
  if (!alumnoAEditar) {
    console.warn(`Alumno con LU "${lu}" no encontrado para editar.`);
    // Opcional: alert('Alumno no encontrado.');
    return <Navigate to="/ListaAlumnos" replace />;
  }

  const handleSubmitEdicion = (datosAlumnoActualizado) => {
    // Llama a la función onEditarSubmit pasada por props,
    // que se encargará de actualizar el estado en el componente padre (ej. App.jsx)
    // El LU original se usa para identificar al alumno, datosAlumnoActualizado contiene los nuevos valores.
    // AlumnoForm podría ya incluir el LU (posiblemente como readOnly).
    onEditarSubmit(alumnoAEditar.Lu, datosAlumnoActualizado);

    // Opcional: Mostrar una notificación de éxito
    // alert('Alumno actualizado con éxito!');

    // Redirige a la lista de alumnos o a la página de detalles del alumno
    navigate('/ListaAlumnos');
    // O, por ejemplo, a una página de detalles si la tienes: navigate(`/alumnos/${alumnoAEditar.Lu}`);
  };

  return (
    <div>
      <h2>Editar Alumno: {alumnoAEditar.nombre} {alumnoAEditar.apellido}</h2>
      <AlumnoForm
        initialData={alumnoAEditar}
        onSubmitForm={handleSubmitEdicion}
        isEditMode={true} // Para que AlumnoForm sepa que está en modo edición
      />
    </div>
  );
};

export default EditarAlumnoPage;