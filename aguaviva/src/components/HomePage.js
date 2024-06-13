import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Correct import
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './HomePage.css';
import logo from './logo.png';
import bg from './bg.png';
import video from './video.mp4'
import liquor from './liquor1.webp';
import depression from './depression-1.webp';
import codependency from './codependency.webp';
import migraine from './migraine.webp';
import eatingDisorder from './eating-disorder.webp';
import board from './board.png'
import image from './image.png';
import nueva from './nueva.png';
import enferm from './enfermedades.webp';
import comentarios from './comentarios.png';
import people from './people.webp'
import coffee from './undraw_coffee_with_friends_3cbj-1 (1).png';
import bubbles from './bubbles.png';
const HomePage = () => {
    const videoRef = useRef(null);
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const handleVideoClick = () => {
        if (videoRef.current) {
            videoRef.current.style.opacity = 1;
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (imgRef.current) {
            imgRef.current.style.transform = `translateY(-${scrollY * 0.05}px) translateX(-50%)`;
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="home-container">
            <header className='head-container'>
                <nav className='nav-elements'>
                    <div className="logo-container"><img src={logo} alt="Agua Viva Logo" className="logo" /></div>
                    <button className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
                    </button>
                    <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <li>¿Qué somos?</li>
                        <li>¿Qué no somos?</li>
                        <li>¿Qué hacemos?</li>
                        <li>¿Por qué lo hacemos?</li>
                        <li>Testimonios</li>
                        <li>Mi Experiencia</li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="background-image" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="content-wrapper" >

                        <section className="intro">
                            <div className="left">
                                <div className="leftheaderContentContainer">
                                    <h4>BIENVENIDO A AGUA VIVA</h4>
                                    <h1>El sentir vacío existencial tiene una respuesta</h1>
                                    <p>¿Te vives constantemente en ansiedad, depresión, angustia o frustración?</p>
                                </div>

                                <div className='contact-container'>
                                    <div className="contact-options">
                                        <div className="contact-option">
                                            <FontAwesomeIcon icon={faWhatsapp} size="4x" className='Path' />
                                            <h4>Whatsapp</h4><p>Envíanos un Whatsapp</p>
                                        </div>
                                        <div className="contact-option">
                                            <FontAwesomeIcon icon={faEnvelope} size="4x" width='100px' className='Path' />
                                            <h4>Email</h4>
                                            <p>Te contestaremos tan rápido como podamos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className="video-container" onClick={handleVideoClick}>
                                    <video ref={videoRef} className="iphone-video" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="info-section">
                        <section className="info-cards-row">
                            <div className="info-card">
                                <img src={liquor} alt="Alcoholismo y drogadicción" />
                                <h3>Alcoholismo y drogadicción</h3>
                                <p>¿Has dejado alguna responsabilidad o proyecto por beber, drogarte o priorizar una relación afectiva?</p>
                                <p>¿Has bebido o te has drogado al grado de perder la memoria, hacer el ridículo, o tener arranques de violencia?</p>
                                <p>¿Tu economía se ha visto afectada por tu manera de beber o drogarte?</p>
                            </div>
                            <div className="info-card">
                                <img src={migraine} alt="Neurosis" />
                                <h3>Neurosis</h3>
                                <p>¿Frecuentemente piensas que la vida es injusta o que las personas te quieren dañar o que no te aman lo suficiente?</p>
                                <p>¿Te sientes o las personas a tu alrededor te perciben irritable, de mal humor o enojado constantemente?</p>
                                <p>¿Te sientes solo aún en momentos en los que estás acompañado?</p>
                            </div>
                            <div className="info-card">
                                <img src={depression} alt="Depresión y Ansiedad" />
                                <h3>Depresión y Ansiedad</h3>
                                <p>¿Vives en estados de vacío emocional en los que sientes que la vida no tiene sentido?</p>
                                <p>¿Has intentado quitarte la vida o has pensado en hacerlo?</p>
                                <p>¿Has abandonado planes o proyectos y no logras retomarlos debido a tu estado emocional?</p>
                            </div>
                        </section>
                        <section className="info-cards-row">
                            <div className="info-card2">
                                <img src={eatingDisorder} alt="Trastornos alimenticios" />
                                <h3>Trastornos alimenticios</h3>
                                <p>¿La angustia de tu apariencia física te ha llevado a dejar de comer por varias horas, o vomitar lo que comes?</p>
                                <p>¿Cuándo comes, lo haces en exceso y sientes culpa al respecto?</p>
                                <p>¿Sientes miedo antes de comer que puedes llegar al grado de medir exageradamente lo que comes?</p>
                            </div>

                            <div className="info-card2">
                                <img src={codependency} alt="Codependencia" />
                                <h3>Codependencia</h3>
                                <p>Tiendes a hacer cosas con el fin de complacer y obtener aprobación o aceptación de otras personas (tus padres, pareja, amigos, etc).</p>
                                <p>En tu búsqueda de esta aprobación o aceptación de otros, ¿renuncias a lo que tu anhelas o deseas?</p>
                            </div>
                        </section>
                        <div className="map-section">
                            <h2>ENCUENTRA TU GRUPO MÁS CERCANO</h2>
                            <h3>Directorio Agua Viva</h3>
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/d/embed?mid=1GmrFE4RYYe3ZI-zEHVFDaYbjGdq23Tc&ehbc=2E312F&noprof=1" width="940" height="480"></iframe>                    </div>
                        </div>
                        <div className="quesomos-section">
                            <div className="quesomos-container">
                                <div className='section11'>
                                    <h2 >Un día a la vez</h2>
                                    <p>Somos un grupo anónimo de autoayuda sin fines de lucro dedicado a trabajar
                                        y entender diversos síntomas y malestares de la enfermedad emocional, tales
                                        como neurosis, depresión, ansiedad, codependencia, desórdenes alimenticios,
                                        alcoholismo, drogadicción, etc.
                                    </p>

                                    <div className='boardrow'>
                                        <img src={people}></img>
                                        <div className='textcolum'>
                                            <h4>PARA PERSONAS ENTRE 13 Y 70 AÑOS </h4>
                                            <p>No importa tu clase social, etnia, creencia, religión o partido político.</p>
                                            <button className="learn-more-buton">Conocer más</button>

                                        </div>
                                    </div>
                                </div>
                                <div className='section22'>
                                    <img src={coffee}></img>
                                </div>

                            </div>
                        </div>
                        <div className="quesomos-section">
                            <div className="nosomos-container">
                                <div className='section11'>
                                    <h4 >¿QUÉ NO SOMOS?
                                    </h4>
                                    <h2 className="dia">No somos profesionales, pero sabemos lo que hacemos</h2>
                                    <p>No somos AA, las problemáticas a las que atendemos no se centran únicamente en el consumo de alcohol o drogas, tampoco somos una religión, nuestros miembros son libres de profesar cualquier creencia o credo e incluso de no hacerlo. No somos una secta, si tu, llegas a cualquier grupo de Agua Viva, serás bienvenido, y estarás en toda la libertad de elegir ser o no parte de nuestra comunidad.

                                        No somos profesionales y no pretendemos serlo, nuestro trabajo no es experimental, Agua Viva tiene más de 20 años en los cuales hemos logrado influir positivamente en la vida de miles de personas.
                                    </p>


                                    <button className="learn-more-buton">Conocer más</button>



                                </div>
                                <div className='section22'>
                                    <img src={bubbles}></img>
                                </div>

                            </div>
                        </div>

                        <div className="nueva-section">
                            <div className="image-container">
                                <img src={nueva} alt="Una nueva visión" />
                                <button className="learn-more-button">Conocer más</button>
                            </div>
                        </div>
                        <div className="custom-image-container">
                            <img src={enferm} alt="Background" className="custom-scrolling-image" ref={imgRef} />
                            <div className="custom-content-overlay">
                                <h2>¿Por qué lo hacemos?</h2>
                                <p>Nos dimos cuenta de que entregarnos a otros seres humanos sin esperar nada a cambio, nos ayudaba a recuperarnos y mantenernos sobrios un día a la vez.</p>
                                <a href="#" className="custom-btn">Saber más</a>
                            </div>
                        </div>

                        <div className="testimonials-container">
                            <h2>Comentarios de la Comunidad</h2>
                            <div className="testimonials-wrapper">
                                <div className="testimonial-box">
                                    <p>Tal como fui enseñado desde que tengo memoria y Agua Viva me ha enfatizado: el bien emana del propio interior de cada uno.</p>
                                    <p>¡Esto me cambió la vida!</p>
                                    <p className="author">Jesús M.</p>
                                </div>
                                <div className="testimonial-box highlighted">
                                    <p>Es fácil vivir auto engañados; tener una vida mediocre, trabajar, gastarse el dinero en alcohol para sentirse mejor de nuestra vida, sin arreglar nada, solo provocando momentos esporádicos de felicidad, pero con vacío existencial.</p>
                                    <p>Gracias a que me permití invertir tiempo en mí hoy puedo entenderme mejor y vivir feliz.</p>
                                    <p className="author">Jonathan S.</p>
                                </div>
                                <div className="testimonial-box">
                                    <p>Gracias a Agua Viva el día de hoy ya no sufro de ataques de ansiedad, pude mantener mi matrimonio, y encontré esa seguridad en mí que me permite construir la vida que siempre quise.</p>
                                    <p className="author">Óscar B.</p>
                                </div>
                            </div>
                        </div>
                        <div className="experience-container">
                            <div className="left-column">
                                <div className="step">
                                    <h2>01</h2>
                                    <div>
                                        <h4>IDENTIFICA TU GRUPO MÁS CERCANO</h4>
                                        <p>Hay más de 80 grupos en México y USA, identifica el más cerca a tu casa.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <h2>02</h2>
                                    <div>
                                        <h4>ASISTE A TUS JUNTAS DE PREPARACIÓN</h4>
                                        <p>Estas son juntas que te van a ayudar a prepararte para vivir tu experiencia.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <h2>03</h2>
                                    <div>
                                        <h4>VIVE TU EXPERIENCIA</h4>
                                        <p>Aquí irás a hacer un inventario moral de ti mismo, podrás identificar el origen de tus problemas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="header">
                                    <h2>MI EXPERIENCIA</h2>
                                    <h1>Es tu momento.</h1>
                                    <p>Creamos una experiencia vivencial, de intensa reflexión. Generamos un clima propicio para la introspección profunda sobre nuestro pasado y presente con el fin de encontrar respuestas a nuestros problemas actuales.</p>
                                    <button>Comenzar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="footer-content">
                            <h2>Siempre habrá alguien para escucharte. Ya no estás solo.</h2>
                            <div className="contacts">
                                <div className="contact">
                                    <FontAwesomeIcon className="icon" icon={faWhatsapp} size="4x" />
                                    <span>Whatsapp</span>
                                    <p>Envíanos un Whatsapp</p>
                                </div>
                                <div className="contact">
                                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="4x" />
                                    <span>Email</span>
                                    <p>Te contestaremos tan rápido como podamos</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>Copyright © 2023 Agua Viva Grupos Anónimos de Autoayuda</p>
                            <div className="social-icons">
                                <FontAwesomeIcon className='facebook' icon={faFacebook} size="2x" />
                                <FontAwesomeIcon className='instagram' icon={faInstagram} size="2x" />
                            </div>
                        </div>
                    </footer>
                </div>

            </main>
        </div>
    );
};

export default HomePage;

