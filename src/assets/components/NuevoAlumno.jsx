import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ListaAlumnosExistentes from '../components/ListaAlumnosExistentes';
import Alumno from '../components/AlumnoData';

const NuevoAlumno = ({ agregarAlumno }) => {
  const navigate = useNavigate();

  const guardarAlumnoNuevo = (datosFormulario) => {
    const nuevoAlumno = Alumno(datosFormulario); // Genera el LU automáticamente
    agregarAlumno(nuevoAlumno);                  // Agrega al array de alumnos
    navigate('/MostrarListaAlumnos');                    // Redirige a la lista de alumnos
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Registrar Nuevo Alumno</h2>
          <ListaAlumnosExistentes
            datosIniciales={{
              nombre: '',
              apellido: '',
              curso: '',
              email: '',
              domicilio: '',
              telefono: '',
              estado: 'activo',
            }}
            alEnviar={guardarAlumnoNuevo}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NuevoAlumno;
