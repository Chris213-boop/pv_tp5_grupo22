
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from 'react-router-dom';



const Home = () => {
    return (
        <Container>
            <Card className="text-center">
                <Card.Header>
                    <Navbar bg="light" data-bs-theme="light">
                        <Container>
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="#/ListaAlumnos">Lista de Alumnos</Nav.Link>
                                <Nav.Link href="#/NuevoALumno">Nuevo Alumno</Nav.Link>
                                <Nav.Link href="#nosostros">Nosotros</Nav.Link>
                        </Container>
                    </Navbar>
                </Card.Header>
                <Card.Body>
                    <Card.Title> Bienvenido al Sistema de Gestión de Alumnos </Card.Title>
                    <Card.Text>
                        Administra los datos de los estudiantes de forma rápida y sencilla.
                    </Card.Text>
                    <Image src="/logo-fi-unju.jpg" fluid />
                    <Button variant="primary">Ver Lista de ALumnos</Button>
                </Card.Body>
                <Card.Footer className="text-muted">© 2025 Grupo 22 - v1.0</Card.Footer>
            </Card>
        </Container>
    )
}

export default Home;