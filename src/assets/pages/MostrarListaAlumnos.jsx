import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DetalleAlumno from './DetalleAlumno';

function MostrarListaAlumnos({ alumnos }) {
    const alumnosActivos = alumnos.filter(a => a.estado === true);
    const alumnosInactivos = alumnos.filter(a => a.estado === false);

    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

    if (alumnoSeleccionado) {
    return (
      <DetalleAlumno
        alumno={alumnoSeleccionado}
        volver={() => setAlumnoSeleccionado(null)}
      />
    );
  }

    const CardsAlumnos = (lista, titulo, color) => (
    <div className="mb-4">
      <h4 className="text-center mb-3">
        <Badge bg={color} className="p-2">{titulo}</Badge>
      </h4>
      <Row xs={1} md={2} lg={3} className="g-4">
        {lista.length === 0 ? (
          <p className="text-muted text-center">No hay alumnos en esta categoría.</p>
        ) : (
          lista.map((alumno) => (
            <Col key={alumno.lu}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Img
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png"
            alt={`Foto de ${alumno.nombre}`}
            style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '20px' }}
          />
                  <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">LU: {alumno.lu}</Card.Subtitle>
                  <Card.Text>
                    <strong>Curso:</strong> {alumno.curso}<br />
                    <strong>Estado:</strong>{' '}
                    <Badge bg={alumno.estado ? 'success' : 'secondary'}>
                      {alumno.estado ? 'Activo' : 'Inactivo'}
                    </Badge>
                  </Card.Text>
                  <Button
                    variant="info"
                    onClick={() => setAlumnoSeleccionado(alumno)}
                    className="mt-2"
                  >
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );

    return (
        <Container className="mt-4">
            {CardsAlumnos(alumnosActivos, '👩‍🎓 Alumnos Activos', 'primary')}
            {CardsAlumnos(alumnosInactivos, '🗃 Alumnos Inactivos', 'warning')}
        </Container>
    );
}

export default MostrarListaAlumnos;
