
// import Row from 'react-bootstrap/Row';
// import AlumnoCard from '../components/AlumnoCard.jsx';
// import ListaAlumnosExistentes from "../components/ListaAlumnosExistentes.jsx";

// function MostrarListaAlumnos() {
//     return (
//         <div>
//             <Row xs={1} md={4} className="g-4">
//                 {ListaAlumnosExistentes.map((alumno) => (
//                     <AlumnoCard key={alumno.lu} alumno={alumno} />
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default MostrarListaAlumnos;
function MostrarListaAlumnos({ alumnos }) {
    const alumnosActivos = alumnos.filter(a => a.estado === true);
    const alumnosInactivos = alumnos.filter(a => a.estado === false);

    const Tabla = (lista, titulo) => (
        <div className="lista">
            <h2 className="titulo">{titulo}</h2>
            {lista.length === 0 ? (
                <p>No hay alumnos en esta categoría.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>LU</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Curso</th>
                            <th>Email</th>
                            <th>Domicilio</th>
                            <th>Teléfono</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((alumno) => (
                            <tr key={alumno.lu}>
                                <td>{alumno.lu}</td>
                                <td>{alumno.nombre}</td>
                                <td>{alumno.apellido}</td>
                                <td>{alumno.curso}</td>
                                <td>{alumno.email}</td>
                                <td>{alumno.domicilio}</td>
                                <td>{alumno.telefono}</td>
                                <td>{alumno.estado ? 'Activo' : 'Inactivo'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );

    return (
        <>
            {Tabla(alumnosActivos, '👩‍🎓 Alumnos Activos')}
            {Tabla(alumnosInactivos, '🗃 Alumnos Inactivos')}
        </>
    );
}

export default MostrarListaAlumnos;
