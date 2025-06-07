
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlumnoData from './AlumnoData';
import useValidacionAlumno from '../hooks/useValidacionAlumno';

//componentes de bootstap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/esm/Container';


function AlumnoFormulario({ onAddAlumno }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');

  //////////////////////
  const [carrera, setCarrera] = useState('');

  /////////////////////

  const navigate = useNavigate();

  ////////////////////////////////////
 
  const {
    esValido,
    tocado,
    marcarTocado
  } = useValidacionAlumno({
    nombre,
    apellido,
    curso,
    email,
    domicilio,
    telefono,
    carrera
  });

  ///////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(esValido).some(val => !val)) {
      return;
    }

    const datos = {
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
      ////////
      carrera,
      //////////
      estado: true,
    };
    const nuevoAlumno = AlumnoData(datos);  //aqui hacemos el llamada a Item pasandole los datos que tenemos en const datos

    onAddAlumno(nuevoAlumno);

    setNombre('');
    setApellido('');
    setCurso('');
    setEmail('');
    setDomicilio('');
    setTelefono('');
    ////////////
    setCarrera('');
    ////////

    navigate("/listar");
  };

  return (
    <Container >
    <Form onSubmit={handleSubmit} noValidate>
      <h2><Badge bg="primary">Agregar Nuevo Alumno</Badge></h2>

      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Nombre/s</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onBlur={() => marcarTocado("nombre")}
            isValid={tocado.nombre && esValido.nombre}
            isInvalid={tocado.nombre && !esValido.nombre}
            required
          />
          <Form.Control.Feedback type="invalid">
            El nombre debe tener al menos 3 caracteres.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
             onBlur={() => marcarTocado("apellido")}
            isValid={tocado.apellido && esValido.apellido}
            isInvalid={tocado.apellido && !esValido.apellido}
            required
          />
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
            onChange={(e) => setCurso(e.target.value)}
            step="0.01"
            onBlur={() => marcarTocado("curso")}
            isValid={tocado.curso && esValido.curso}
            isInvalid={tocado.curso && !esValido.curso}
            required
          />
          <Form.Control.Feedback type="invalid">
            El curso es obligatorio.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => marcarTocado("email")}
            isValid={tocado.email && esValido.email}
            isInvalid={tocado.email && !esValido.email}
            required
          />
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
            onChange={(e) => setDomicilio(e.target.value)}
            onBlur={() => marcarTocado("domicilio")}
            isValid={tocado.domicilio && esValido.domicilio}
            isInvalid={tocado.domicilio && !esValido.domicilio}
            required
          />
          <Form.Control.Feedback type="invalid">
            El domicilio debe tener al menos 5 caracteres.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
             onBlur={() => marcarTocado("telefono")}
            isValid={tocado.telefono && esValido.telefono}
            isInvalid={tocado.telefono && !esValido.telefono}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese un número válido (7 a 15 dígitos).
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="10" className="mb-3">
      <FloatingLabel controlId="floatingSelect" label="Seleccione la Carrera que Cursa">
        <Form.Select
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
          onBlur={() => marcarTocado("carrera")}
          isValid={tocado.carrera && esValido.carrera}
          isInvalid={tocado.carrera && !esValido.carrera}
          required
        >
          <option>Seleccione la Carrera que Cursa</option>
          <option value="1">APU </option>
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
      <Form.Group className="mt-4">
        <Button type="submit" variant="primary" size="lg">Agregar Alumno</Button>
      </Form.Group>
    </Form >
    </Container>
  );
}

export default AlumnoFormulario;
