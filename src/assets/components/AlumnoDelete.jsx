import { useState } from 'react';

function AlumnoDelete({ onDelete }) {
    const [lu, setLu] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (lu.trim() === '') return;

        const fueDesactivado = onDelete(lu);

        if (fueDesactivado) {
            alert(`Alumno con LU / Nombre / Apellido "${lu}" ha sido eliminado.`);
        } else {
            alert(`No se encontró un alumno con LU / Nombre / Apellido "${lu}".`);
        }

        setLu('');
    };

    return (
        <div>
            <h2>Eliminar Alumno por lu</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="busqueda">LU, Nombre o Apellido:</label>
                    <input
                        type="text"
                        value={lu}
                        onChange={(e) => setLu(e.target.value)}
                        placeholder="LU del Alumno"
                    />
                </div>
                <div>
                    <button type="submit" className='boton'>Eliminar</button>
                </div>
            </form>
        </div>

    );
}

export default AlumnoDelete;