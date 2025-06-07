import { useState } from 'react';

function useValidacionAlumno(campos) {
  const [tocado, setTocado] = useState({});

  const marcarTocado = (campo) => {
    setTocado({ ...tocado, [campo]: true });
  };

  const esValido = {
    nombre: campos.nombre.trim().length >= 3,
    apellido: campos.apellido.trim().length >= 3,
    curso: campos.curso.trim().length > 0,
    email: /\S+@\S+\.\S+/.test(campos.email),
    domicilio: campos.domicilio.trim().length >= 5,
    telefono: /^\d{7,15}$/.test(campos.telefono),
    carrera: campos.carrera !== '',
  };

  return {
    esValido,
    tocado,
    marcarTocado
  };
}

export default useValidacionAlumno;