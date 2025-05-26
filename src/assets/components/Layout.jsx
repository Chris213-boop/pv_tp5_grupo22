import { Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";


function Layout() {
    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="#/ListaAlumnos">Lista de Alumnos</Nav.Link>
                    <Nav.Link href="#/NuevoALumno">Nuevo Alumno</Nav.Link>
                    <Nav.Link href="#nosostros">Nosotros</Nav.Link>
            </Container>
        </Navbar>
         <Container className="mt-4">
        <Outlet />
      </Container>
      </>
    )
}


export default Layout;