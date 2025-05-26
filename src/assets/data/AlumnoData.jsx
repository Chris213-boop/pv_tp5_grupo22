import generarLUNuevo from "../utils/generarLU";

function Alumno({nombre, apellido, curso, email, domicilio, telefono, estado }){
    const lu = generarLUNuevo(alumnos);
    return {
        lu,
        nombre,
        apellido,
        curso,
        email,
        domicilio,
        telefono,
        estado,
    };
}

export default Alumno;