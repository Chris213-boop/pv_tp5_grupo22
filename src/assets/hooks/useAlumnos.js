import { useState, useEffect, useCallback } from 'react';
import AlumnoData from '../components/AlumnoData';
import BuscarAlumno from './BuscarAlumno';

export default function useAlumnos() {
  const [alumnos, setAlumnos] = useState(() => [
    AlumnoData({
      nombre: "Ana",
      apellido: "López",
      curso: "3°A",
      email: "ana.lopez@hotmail.com",
      domicilio: "Calle Falsa 123",
      telefono: "4230957",
      carrera: "APU",
      estado: true,
    }),
    AlumnoData({
      nombre: "Carlos",
      apellido: "Pérez",
      curso: "2°B",
      email: "carlos.perez@gmail.com",
      domicilio: "Av. Siempre Viva 742",
      telefono: "388-4842277",
      carrera: "APU",
      estado: true,
    }),
    AlumnoData({
      nombre: "Lucía",
      apellido: "Martínez",
      curso: "1°C",
      email: "lucia.martinez@gmail.com",
      domicilio: "San Martín 500",
      telefono: "388-4348958",
      carrera: "APU",
      estado: true,
    }),
    AlumnoData({
      nombre: "Javier",
      apellido: "Gómez",
      curso: "4°D",
      email: "javier.gomez@example.com",
      domicilio: "Belgrano 1200",
      telefono: "388-5253053",
      carrera: "APU",
      estado: true,
    }),
  ]);

  useEffect(() => {
    if (alumnos.length > 0) {
      console.log("Lista de alumnos actualizada:", alumnos);
    }
  }, [alumnos]);

  const handleAgregarAlumno = useCallback((nuevoAlumno) => {
    setAlumnos(prev => [...prev, nuevoAlumno]);
  }, []);

  const deshabilitarAlumno = useCallback((valorBusqueda) => {
    const alumnoEncontrado = BuscarAlumno(alumnos, valorBusqueda);

    if (alumnoEncontrado && alumnoEncontrado.estado !== false) {
      setAlumnos(prev =>
        prev.map(alumno =>
          alumno === alumnoEncontrado ? { ...alumno, estado: false } : alumno
        )
      );
      return true;
    }
    return false;
  }, [alumnos]);

  const actualizarAlumno = useCallback((alumnoActualizado) => {
    setAlumnos(prev =>
      prev.map(alumno =>
        alumno.lu === alumnoActualizado.lu
          ? { ...alumno, ...alumnoActualizado }
          : alumno
      )
    );
  }, []);

  return {
    alumnos,
    handleAgregarAlumno,
    deshabilitarAlumno,
    actualizarAlumno
  };
}