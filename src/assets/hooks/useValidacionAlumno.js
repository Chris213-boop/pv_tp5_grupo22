import { useState } from 'react';

function useValidacionAlumno(campos) {
  const [tocado, setTocado] = useState({});

  const marcarTocado = (campo) => {
    setTocado({ ...tocado, [campo]: true });
  };

  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto.trim());
  const tieneLongitud = (texto, min) => texto.trim().length >= min;


  const esValido = {
    nombre: tieneLongitud(campos.nombre, 3) && soloLetras(campos.nombre),
    apellido: tieneLongitud(campos.apellido, 3) && soloLetras(campos.apellido),
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