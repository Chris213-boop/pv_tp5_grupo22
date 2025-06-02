import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormularioAlumno() {
  const [validated, setValidated] = useState(false);

  const manejarEnvio = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={manejarEnvio}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre/s</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Leandro"
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Perez"
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Nombre de Usuario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Perez_Leandro"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor proporcione un nombre de usuario válido.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control type="text" placeholder="Av. Córdoba 720 " required />
          <Form.Control.Feedback type="invalid">
            Por favor proporcione un domicilio válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="3º Año B" required />
          <Form.Control.Feedback type="invalid">
            Por favor proporcione un curso válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="+549 1123456789" required />
          <Form.Control.Feedback type="invalid">
            Por favor proporcione un número de celular valido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Declaro que la información proporcionada es verdadera y completa."
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Cargar Alumno</Button>
    </Form>
  );
}

export default FormularioAlumno;