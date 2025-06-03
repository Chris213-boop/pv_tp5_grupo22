import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AlumnoFormulario({ initialData = {}, onSubmitForm, isEditMode = false }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
    estado: 'activo',
  });
  useEffect(() => {
    if (isEditMode && initialData) {
      setFormData({
        nombre: initialData.nombre || '',
        apellido: initialData.apellido || '',
        curso: initialData.curso || '',
        email: initialData.email || '',
        domicilio: initialData.domicilio || '',
        telefono: initialData.telefono || '',
        estado: initialData.estado || 'activo',
      });
    } else {
      setFormData({
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        telefono: '',
        estado: 'activo',
      });
    }
  }, [initialData, isEditMode]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    onSubmitForm(formData);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="formNombre">
          <Form.Label>Nombre/s</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre del alumno"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Por favor ingrese un nombre.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido del alumno"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Por favor ingrese un apellido.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">Por favor ingrese un email válido.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formCurso">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="Ej: 3º Año B" name="curso" value={formData.curso} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">Por favor ingrese un curso.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="formDomicilio">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control type="text" placeholder="Ej: Av. Córdoba 720" name="domicilio" value={formData.domicilio} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">Por favor ingrese un domicilio.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="formTelefono">
          <Form.Label>Teléfono/Celular</Form.Label>
          <Form.Control type="text" placeholder="Ej: +5491123456789" name="telefono" value={formData.telefono} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">Por favor ingrese un número de teléfono válido.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Select name="estado" value={formData.estado} onChange={handleChange} required>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Por favor seleccione un estado.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Declaro que la información proporcionada es verdadera y completa."
          feedback="Debes aceptar los términos antes de enviar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">{isEditMode ? 'Guardar Cambios' : 'Cargar Alumno'}</Button>
    </Form>
  );
}

export default AlumnoFormulario;