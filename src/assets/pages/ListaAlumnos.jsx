
import Row from 'react-bootstrap/Row';
import AlumnoCard from '../components/AlumnoCard.jsx';
import AlumnoForm from "../components/AlumnoForm.jsx"; // <-- cambiar nombre para que sea claro

function ListaAlumnos() {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {AlumnoForm.map((alumno) => (
                    <AlumnoCard key={alumno.lu} alumno={alumno} />
                ))}
            </Row>
        </div>
    );
}

export default ListaAlumnos;
