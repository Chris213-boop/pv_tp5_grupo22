import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';




const Home = () => {
    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title> Bienvenido al Sistema de Gestión de Alumnos </Card.Title>
                    <Card.Text>
                        Administra los datos de los estudiantes de forma rápida y sencilla.
                    </Card.Text>
                    <Image src="/logo-fi-unju.jpg" fluid />
                    <Link to="/listar">
                    <Button variant="primary">Ver Lista de ALumnos</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">© 2025 Grupo 22 - v1.0</Card.Footer>
            </Card>
        </Container>
    )
}

export default Home;