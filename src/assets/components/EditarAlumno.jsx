import { useState } from 'react';

function AlumnoEdit({ alumnos, onUpdate }) {
  const [lu, setLu] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [carrera, setCarrera] = useState('');
  const [estado, setEstado] = useState(true);

  const handleSelectChange = (e) => {
    const luSeleccionado = Number(e.target.value);
    setLu(luSeleccionado);
    const alumno = alumnos.find((a) => a.lu === luSeleccionado);
    if (alumno) {
      setNombre(alumno.nombre);
      setApellido(alumno.apellido);
      setCurso(alumno.curso);
      setEmail(alumno.email);
      setDomicilio(alumno.domicilio);
      setTelefono(alumno.telefono);
      setCarrera(alumno.carrera);
      setEstado(alumno.estado);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lu) return;

    if (
      nombre.length < 3 ||
      apellido.length < 3 ||
      curso.trim() === '' ||
      !email.includes('@') ||
      domicilio.length < 5 ||
      telefono.length < 7 ||
      carrera === ''
    ) {
      alert('Por favor completá correctamente todos los campos.');
      return;
    }

    onUpdate({
      lu,
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
      carrera,
      estado,
    });

    // limpiar
    setLu('');
    setNombre('');
    setApellido('');
    setCurso('');
    setEmail('');
    setDomicilio('');
    setTelefono('');
    setCarrera('');
    setEstado(true);
  };

  return (
    <div className="formulario">
      <h2 className="titulo">Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <div className="contenido-formulario">
          <div>
            <label htmlFor="alumno">Selecciona un alumno:</label>
            <select id="alumno" value={lu} onChange={handleSelectChange}>
              <option value="">-- Elige un alumno --</option>
              {alumnos.map((a) => (
                <option key={a.lu} value={a.lu}>
                  {a.nombre} {a.apellido} ({a.lu})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div>
            <label>Apellido:</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </div>

          <div>
            <label>Curso:</label>
            <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>Domicilio:</label>
            <input type="text" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
          </div>

          <div>
            <label>Teléfono:</label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>

          <div>
            <label>Carrera:</label>
            <select value={carrera} onChange={(e) => setCarrera(e.target.value)}>
              <option value="">-- Selecciona carrera --</option>
              <option value="1">APU</option>
              <option value="2">Ingeniería de Minas</option>
              <option value="3">Ingeniería Industrial</option>
              <option value="4">Ingeniería Informática</option>
              <option value="5">Ingeniería Química</option>
              <option value="6">Licenciatura en Sistemas</option>
            </select>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={estado}
                onChange={(e) => setEstado(e.target.checked)}
              />
              Alumno Activo
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="boton">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}

export default AlumnoEdit;
