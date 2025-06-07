import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Nosotros() {
    return (
        <Card className="m-4 p-3 shadow">
            <Card.Body>
                <Card.Title>Nosotros</Card.Title>
                <Card.Text>
                    Somos un equipo de cinco personas apasionadas por la creatividad, la innovación y el trabajo en equipo. Cada uno aporta sus habilidades únicas para dar vida a este proyecto, combinando diseño, programación, contenido y visión estratégica.
                    Juntos, buscamos ofrecer una experiencia de calidad y con propósito.
                </Card.Text>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaGsuYhpblALOg6cmjwPgaO2bZu4z2VbRDw&s" />
                        <Card.Body>
                            <Card.Title>Torres Pablo Gabriel</Card.Title>
                            <Card.Text>
                                Cuenta con más de 4 años de experiencia en diseño visual y branding. Ha trabajado en agencias de publicidad y proyectos freelance,
                                desarrollando identidades visuales modernas y funcionales.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Diseñador UI/UX</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn3d.iconscout.com/3d/premium/thumb/programador-de-aplicaciones-moviles-trabajando-en-una-computadora-portatil-12752960-10371381.png?f=webp" />
                        <Card.Body>
                            <Card.Title>Torres Cintia Cristina</Card.Title>
                            <Card.Text>
                                Especialista en desarrollo web con tecnologías como HTML, CSS, JavaScript y React.
                                Tiene 3 años de experiencia en startups tecnológicas, creando interfaces atractivas y responsivas.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Desarrolladora Frontend</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://w7.pngwing.com/pngs/188/424/png-transparent-software-developer-computer-servers-programmer-web-developer-computer-software-others-miscellaneous-face-head-thumbnail.png" />
                        <Card.Body>
                            <Card.Title>Pedro Dardo Ramón Cayo </Card.Title>
                            <Card.Text>
                                Con 5 años en el área de desarrollo de servidores y bases de datos,
                                ha trabajado con Node.js, MySQL y APIs REST. Se enfoca en la seguridad y eficiencia de las aplicaciones.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Desarrollador Backend</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://img.freepik.com/vector-premium/software-programador-lenguaje-avatar_24877-773.jpg" />
                        <Card.Body>
                            <Card.Title>Ana Lucia Soraide</Card.Title>
                            <Card.Text>
                                Ha gestionado campañas en redes sociales, SEO y estrategias de contenido durante más de 6 años.
                                Su enfoque está en aumentar la visibilidad y conectar con el público objetivo.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">DevOps y Soporte Técnico</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfXDIoJWoXboAVeaJNw1CZdpzubQsvuvG6w&s" />
                        <Card.Body>
                            <Card.Title>Maximiliano Antenor</Card.Title>
                            <Card.Text>
                                Tiene experiencia liderando equipos y asegurando la entrega puntual de proyectos.
                                Ha trabajado en el sector tecnológico durante 7 años, enfocándose en la organización, comunicación y resultados.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Líder de Proyecto / Full Stack Develope</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Card.Body>
            <Card.Footer className="text-center mt-3">
                <small className="text-muted">
                    Las marcas y logos de Grupo 22 son Propiedad de Programación Visual SRL. Todos los derechos reservados 2017®.
                </small>
            </Card.Footer>
        </Card>
    );
}

export default Nosotros;