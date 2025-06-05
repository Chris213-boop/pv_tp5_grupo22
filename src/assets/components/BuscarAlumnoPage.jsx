import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/esm/Container";
import Badge from 'react-bootstrap/Badge';

import BuscarAlumno from './BuscarAlumno'; // función js

function BuscarAlumnoPage({ alumnos }) {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [resultado, setResultado] = useState(null);
  const [noEncontrado, setNoEncontrado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = BuscarAlumno(alumnos, valorBusqueda);
    if (res) {
      setResultado(res);
      setNoEncontrado(false);
    } else {
      setResultado(null);
      setNoEncontrado(true);
    }
  };

  return (
    <Container className="modal show" style={{ display: 'block', position: 'initial' }}>
      <h2><Badge bg="primary">Buscar Alumno</Badge></h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="busqueda">
          <Form.Label>LU, nombre o apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 12345 o Juan o Pérez"
            value={valorBusqueda}
            onChange={(e) => setValorBusqueda(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>

      {resultado && (
        <Alert variant="success" className="mt-3">
          Alumno encontrado: {resultado.nombre} {resultado.apellido} (LU: {resultado.lu})
        </Alert>
      )}

      {noEncontrado && (
        <Alert variant="danger" className="mt-3">
          Alumno no encontrado.
        </Alert>
      )}
    </Container>
  );
}

export default BuscarAlumnoPage;
