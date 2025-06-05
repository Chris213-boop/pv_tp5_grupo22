import generarLUNuevo from "./generarLU";

function Alumno({nombre, apellido, curso, email, domicilio, telefono, carrera, estado }){
  
    const lu =  Math.floor(Math.random() * 100000);

    return {
        lu,
        nombre,
        apellido,
        curso,
        email,
        domicilio,
        telefono,
        carrera,
        estado,
    };
}

export default Alumno;