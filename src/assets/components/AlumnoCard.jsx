import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function AlumnoCard({ alumno }) {
    return (
        <Col>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png"
                    alt={`Foto de ${alumno.nombre}`}
                />
                <Card.Body>
                    <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {alumno.email} <br />
                        <strong>Curso:</strong> {alumno.curso} <br />
                        <strong>Teléfono:</strong> {alumno.telefono}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AlumnoCard;