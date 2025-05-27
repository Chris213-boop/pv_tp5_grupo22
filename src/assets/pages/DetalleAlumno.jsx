import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const DetalleAlumno = ({ alumnos }) => {
  const { lu } = useParams();
  const navigate = useNavigate();

  // Buscar alumno por LU
  const alumno = alumnos.find(a => a.lu === lu);

  // Si no existe, redirige a la lista de alumnos
  if (!alumno) {
    return <Navigate to="/ListaAlumnos" replace />;
  }

  return (
    <Container>
      <Card className="mt-4">
        <Card.Header>
          <h3>Detalle del Alumno: {alumno.nombre} {alumno.apellido}</h3>
        </Card.Header>
        <Card.Body>
          <p><strong>LU:</strong> {alumno.lu}</p>
          <p><strong>Nombre:</strong> {alumno.nombre}</p>
          <p><strong>Apellido:</strong> {alumno.apellido}</p>
          <p><strong>Curso:</strong> {alumno.curso}</p>
          <p><strong>Email:</strong> {alumno.email}</p>
          <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
          <p><strong>Teléfono:</strong> {alumno.telefono}</p>
          <p><strong>Estado:</strong> {alumno.estado}</p>

          <Button variant="secondary" onClick={() => navigate(-1)}>
            Volver
          </Button>{' '}
          <Button variant="warning" onClick={() => navigate(`/EditarAlumno/${alumno.lu}`)}>
            Editar
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleAlumno;