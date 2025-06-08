import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const DetalleAlumno = ({ alumno, volver }) => {
  if (!alumno) {
    return (
      <Container className="mt-4">
        <p className="text-danger text-center">No se encontró el alumno seleccionado.</p>
        <Button variant="secondary" onClick={volver}>Volver</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Card className="mt-4 shadow">
        <Card.Header className="bg-primary text-white">
          <h4>Detalle del Alumno</h4>
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png"
            alt={`Foto de ${alumno.nombre}`}
            style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '20px' }}
          />
          <p><strong>LU:</strong> {alumno.lu}</p>
          <p><strong>Nombre:</strong> {alumno.nombre}</p>
          <p><strong>Apellido:</strong> {alumno.apellido}</p>
          <p><strong>Curso:</strong> {alumno.curso}</p>
          <p><strong>Email:</strong> {alumno.email}</p>
          <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
          <p><strong>Teléfono:</strong> {alumno.telefono}</p>
          <p><strong>Carrera:</strong> {alumno.carrera}</p>
          <p><strong>Estado:</strong> {alumno.estado ? 'Activo' : 'Inactivo'}</p>

          <div className="mt-3">
            <Button variant="secondary" onClick={volver} className="me-2">
              Volver
            </Button>
            
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleAlumno;