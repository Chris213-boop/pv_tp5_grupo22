import Alumno from "../data/AlumnoData.jsx";

const ListaAlumnosExistentes = [
    Alumno({ nombre: "Juan", apellido: "Pérez", curso: "1A", email: "juan@mail.com", domicilio: "Calle 123", telefono: "123456789", estado: "activo" }),
    Alumno({ nombre: "Ana", apellido: "Gómez", curso: "2B", email: "ana@mail.com", domicilio: "Calle 456", telefono: "987654321", estado: "activo" }),
    Alumno({ nombre: "Luis", apellido: "Martínez", curso: "3C", email: "luis@mail.com", domicilio: "Av. 789", telefono: "456789123", estado: "activo" }),
    Alumno({ nombre: "María", apellido: "López", curso: "4D", email: "maria@mail.com", domicilio: "Ruta 321", telefono: "321654987", estado: "inactivo" }),
];

export default ListaAlumnosExistentes;