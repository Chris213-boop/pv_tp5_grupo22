import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AlumnoFormulario from './AlumnoFormulario';
import Container from 'react-bootstrap/Container';

const EditarAlumno = () => {
  const { lu: luParam } = useParams();
  const navigate = useNavigate();
  const [alumnoAEditar, setAlumnoAEditar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const luNumerico = parseInt(luParam, 10);
    const encontrado = ListaAlumnosExistentesData.find(alumno => alumno.lu === luNumerico);
    
    if (encontrado) {
      setAlumnoAEditar(encontrado);
    } else {
      console.warn(`Alumno con LU "${luParam}" no encontrado para editar.`);
    }
    setLoading(false);
  }, [luParam]);

  const handleActualizarAlumno = (datosFormulario) => {
    const indiceAlumno = ListaAlumnosExistentesData.findIndex(a => a.lu === alumnoAEditar.lu);
    if (indiceAlumno !== -1) {
      ListaAlumnosExistentesData[indiceAlumno] = { 
        ...ListaAlumnosExistentesData[indiceAlumno],
        ...datosFormulario
      };
      console.log("Alumno actualizado:", ListaAlumnosExistentesData[indiceAlumno]);
      alert('Alumno actualizado con éxito!');
      navigate('/MostrarListaAlumnos');
    } else {
      console.error("Error al actualizar: Alumno no encontrado en la lista.");
      alert('Error al actualizar el alumno.');
    }
  };

  if (loading) {
    return <Container><p>Cargando datos del alumno...</p></Container>;
  }

  if (!alumnoAEditar && !loading) {
    return <Navigate to="/MostrarListaAlumnos" replace />;
  }

  return (
    <Container className="mt-4">
      <h2>Editar Alumno: {alumnoAEditar.nombre} {alumnoAEditar.apellido}</h2>
      <AlumnoFormulario
        initialData={alumnoAEditar}
        onSubmitForm={handleActualizarAlumno}
        isEditMode={true} 
      />
    </Container>
   );
 };
 
 export default EditarAlumno;