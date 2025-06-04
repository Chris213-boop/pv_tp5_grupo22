import { useState, useEffect } from 'react';

export function useAlumnoFormulario({ initialData = {}, onSubmitForm, isEditMode = false }) {
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
    if (isEditMode && initialData && Object.keys(initialData).length > 0) {
      setFormData(prev => {
        const nuevosDatos = {
          nombre: initialData.nombre || '',
          apellido: initialData.apellido || '',
          curso: initialData.curso || '',
          email: initialData.email || '',
          domicilio: initialData.domicilio || '',
          telefono: initialData.telefono || '',
          estado: initialData.estado || 'activo',
        };
        const sonIguales = Object.entries(nuevosDatos).every(
          ([clave, valor]) => prev[clave] === valor
        );
        return sonIguales ? prev : nuevosDatos;
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

  return {
    formData,
    validated,
    handleChange,
    handleSubmit,
  };
}
