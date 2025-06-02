
import Row from 'react-bootstrap/Row';
import AlumnoCard from '../components/AlumnoCard.jsx';
import ListaAlumnosExistentes from "../components/ListaAlumnosExistentes.jsx";

function MostrarListaAlumnos() {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {ListaAlumnosExistentes.map((alumno) => (
                    <AlumnoCard key={alumno.lu} alumno={alumno} />
                ))}
            </Row>
        </div>
    );
}

export default MostrarListaAlumnos;
