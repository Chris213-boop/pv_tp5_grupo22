
# 👨‍🎓 Aplicación Web para Gestión de Alumnos (React + Vite)

Aplicación desarrollada con React y Vite que permite gestionar datos de alumnos: agregar, editar, eliminar y visualizar su información detallada. Utiliza rutas dinámicas, navegación entre vistas y eventos sintéticos para manejar formularios y acciones del usuario. Su interfaz es clara, intuitiva y pensada para facilitar el acceso a los datos de cada alumno.

---

| **INTEGRANTES DEL GRUPO 22**         | **Nombres de usuario Github**     |
|--------------------------------------|-----------------------------------|
| Antenor, Maximiliano                 | maxiant                           |
| Cayo, Pedro Dardo Ramon              | PedroDardoRamonCayo               |
| Torres, Pablo Gabriel                | eneporene                         |
| Torres, Cintia Cristina              | Chris213-boop                     |
| Vargas Soraide, Ana Lucia            | luciasoraide                      |


---

## 🚀 Funcionalidades Principales

- 🏠 *Home*: pantalla de bienvenida al sistema.
- 📋 *Lista de Alumnos*: muestra todos los alumnos en tarjetas o tablas.
  - Ver detalles de un alumno
  - Editar alumno
  - Eliminar alumno (con confirmación)
- ➕ *Agregar Alumno*: formulario con validación.
- ✏ *Editar Alumno*: formulario precargado para modificar datos.
- 🔎 *Detalle del Alumno*: vista de todos los datos del alumno.
- 🧭 *Navegación General*: menú siempre visible para facilitar el acceso.
- ✅ Redirecciones automáticas al guardar o eliminar.
- 🖱 Manejo completo de eventos en React.

---
## 🧠 Tecnologías y Hooks Usados

- ⚛ *React*
- ⚡ *Vite*
- 🧭 *React Router DOM*
- 💅 **React-Bootstrap

---

### Hooks

- useState: estados de formularios y alumnos.
- useEffect: sincronización y carga inicial.
- useParams: para leer IDs desde la URL.
- useNavigate: redirección después de acciones.
- useRef: referencias a elementos, si se requieren eventos nativos.
- addEventListener: para eventos nativos si es necesario.

---

## 📌 Estructura del Objeto Alumno

```js
{
  lu: "APU00999",             // Código único generado automáticamente
  nombre: "María Eugenia",
  apellido: "Díaz",
  curso: "Tercero",
  email: "mariadiaz@mail.com",
  domicilio: "Av. Congreso 125",
  telefono: "3884895999",
  estado: true                // true = activo, false = inactivo
}
