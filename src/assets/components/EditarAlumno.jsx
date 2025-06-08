import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/esm/Container';


function AlumnoEdit({ alumnos, onUpdate }) {
  const [lu, setLu] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [carrera, setCarrera] = useState('');
  const [estado, setEstado] = useState(true);

  const handleSelectChange = (e) => {
    const luSeleccionado = Number(e.target.value);
    setLu(luSeleccionado);
    const alumno = alumnos.find((a) => a.lu === luSeleccionado);
    if (alumno) {
      setNombre(alumno.nombre);
      setApellido(alumno.apellido);
      setCurso(alumno.curso);
      setEmail(alumno.email);
      setDomicilio(alumno.domicilio);
      setTelefono(alumno.telefono);
      setCarrera(alumno.carrera);
      setEstado(alumno.estado);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lu) return;

    if (
      nombre.length < 3 ||
      apellido.length < 3 ||
      curso.trim() === '' ||
      !email.includes('@') ||
      domicilio.length < 5 ||
      telefono.length < 7 ||
      carrera === ''
    ) {
      alert('Por favor completá correctamente todos los campos.');
      return;
    }

    onUpdate({
      lu,
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
      carrera,
      estado,
    });

    // limpiar
    setLu('');
    setNombre('');
    setApellido('');
    setCurso('');
    setEmail('');
    setDomicilio('');
    setTelefono('');
    setCarrera('');
    setEstado(true);
  };

  return (
    <Container >
      <h2 >
        <Badge bg="primary">Editar Alumno</Badge>
      </h2>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Col} md="10" className="mb-3">
        <FloatingLabel controlId="floatingSelect" label="Selecciona un alumno:">
          {/* <label htmlFor="alumno">Selecciona un alumno:</label> */}
          <Form.Select
          id="alumno"
          value={lu}
          onChange={handleSelectChange}>
            <option value="">-- Elige un alumno --</option>
            {alumnos.map((a) => (
              <option key={a.lu} value={a.lu}>
                {a.nombre} {a.apellido} ({a.lu})
              </option>
            ))}
          </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>Nombre/s</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              El nombre debe tener al menos 3 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              El apellido debe tener al menos 3 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Curso</Form.Label>
            <Form.Control
              type="text"
              value={curso}
              onChange={(e) => setCurso(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              El curso es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              Ingrese un email válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              type="text"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              El domicilio debe tener al menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              Ingrese un número válido (7 a 15 dígitos).
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group as={Col} md="10" className="mb-3">
        <FloatingLabel controlId="floatingSelect" label="Seleccione la Carrera que Cursa">
          <Form.Select
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}>
            <option value="">-- Selecciona carrera --</option>
            <option value="1">APU</option>
            <option value="2">Ingeniería de Minas</option>
            <option value="3">Ingeniería Industrial</option>
            <option value="4">Ingeniería Informática</option>
            <option value="5">Ingeniería Química</option>
            <option value="6">Licenciatura en Sistemas</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Seleccione una carrera válida.
          </Form.Control.Feedback>
        </FloatingLabel>
        </Form.Group>
        <Form.Group>
            <Form.Check
              type="switch"
              checked={estado}
              onChange={(e) => setEstado(e.target.checked)}
              label="Alumno Activo"
            />
        </Form.Group>
        <Form.Group className="mt-4">
          <Button type="submit" variant="primary" size="lg">
            Guardar Cambios
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default AlumnoEdit;
