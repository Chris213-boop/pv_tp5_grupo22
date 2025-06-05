import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AlumnoDelete({ onDelete }) {
    const [lu, setLu] = useState('');
    const [confirmando, setConfirmando] = useState(false);

    const confirmarOcultamiento = () => {
    const fueDesactivado = onDelete(lu); // lógica para ocultar al alumno

    if (fueDesactivado) {
        alert(`Alumno con LU / Nombre / Apellido "${lu}" ha sido eliminado.`);
    } else {
        alert(`No se encontró un alumno con LU / Nombre / Apellido "${lu}".`);
    }

    setConfirmando(false);
    setLu('');
};
    const handleSubmit = (e) => {
        e.preventDefault();
        if (lu.trim() === '') return;
        setConfirmando(true);
    };

    return (
        <Container
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Alumno por LU</Modal.Title>
                </Modal.Header>
                {!confirmando ? (
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="formLU">
                            <Form.Label>LU, Nombre o Apellido:</Form.Label>
                            <Form.Control
                                type="text"
                                value={lu}
                                onChange={(e) => setLu(e.target.value)}
                                placeholder="LU del Alumno"
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">Cancelar</Button>
                            <Button type="submit" variant="primary">Eliminar</Button>
                        </Modal.Footer>
                    
                </Form>
                ) : (
                    <>
                        <Modal.Body>
                            ¿Está seguro que desea eliminar al alumno: <strong>{lu}</strong>?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setConfirmando(false)}>
                                Volver
                            </Button>
                            <Button variant="danger" onClick={confirmarOcultamiento}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </>
                    )}
            </Modal.Dialog>
            
        </Container>

    );
}

export default AlumnoDelete;