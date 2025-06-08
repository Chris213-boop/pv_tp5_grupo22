import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/esm/Container";
import Badge from 'react-bootstrap/Badge';

import BuscarAlumno from '../hooks/BuscarAlumno'; // función js
import DetalleAlumno from '../pages/DetalleAlumno';

function BuscarAlumnoPage({ alumnos }) {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [resultado, setResultado] = useState(null);
  const [noEncontrado, setNoEncontrado] = useState(false);
  const [inactivo, setInactivo] = useState(false);   //estado del alumno

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = BuscarAlumno(alumnos, valorBusqueda);
    if (res) {
      if (res.estado === true) {
        setResultado(res);
        setNoEncontrado(false);
        setInactivo(false);
      } else {
        setResultado(null);
        setNoEncontrado(false);
        setInactivo(true);
      }
    } else {
      setResultado(null);
      setNoEncontrado(true);
      setInactivo(false);
    }
  };

  if (resultado) {
    return (
      <DetalleAlumno
        alumno={resultado}
        volver={() => {
          setResultado(null);
          setValorBusqueda('');
        }}
      />
    );
  }

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
      {noEncontrado && (
        <Alert variant="danger" className="mt-3">
          Alumno no encontrado.
        </Alert>
      )}

      {inactivo && (
        <Alert variant="warning" className="mt-3">
          El alumno está inactivo y no puede ser consultado.
        </Alert>
      )}
    </Container>
  );
}

export default BuscarAlumnoPage;
