
const BuscarAlumno = (alumnos, valorBusqueda) => {
    const valor = valorBusqueda.toLowerCase().trim();

    return alumnos.find(alumno => {
        const luMatch = alumno.lu.toString() === valor;
        const nombreMatch = alumno.nombre?.toLowerCase() === valor;
        const apellidoMatch = alumno.apellido?.toLowerCase() === valor;

        return (luMatch || nombreMatch || apellidoMatch);
    });
};

export default BuscarAlumno;