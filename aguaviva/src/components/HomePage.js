import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import TypingEffect from './TypingEffect';
import { useLanguage } from '../context/LanguageContext';
import './reset.css';
import logo from '../Images/Newlogo.jpeg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './HomePage.css';
import people from '../Images/people.webp';
import coffee from '../Images/2geth.png';
import Bubbles from './Bubbles';
import searching from '../Images/visionary.png';
import fireImage from '../Images/Fire.jpg';
import enferm from '../Images/enfermedades.webp';

const HomePage = () => {
    const { t } = useLanguage();
    const videoRef = useRef(null);
    const imgRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        closeMenu();
        const element = document.querySelector(targetId);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current) {
                try {
                    await videoRef.current.play();
                } catch (error) {
                    console.log('Error attempting to play', error);
                }
            }
        };

        if (document.readyState === 'complete') {
            playVideo();
        } else {
            window.addEventListener('load', playVideo);
            return () => window.removeEventListener('load', playVideo);
        }
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        if (imgRef.current) {
            imgRef.current.style.transform = `translateY(-${scrollY * 0.05}px) translateX(-50%)`;
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        });

        const sections = document.querySelectorAll('.fade-in-left,.fade-in-section, .fade-in-right, .fade-in-bottom');
        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="home-container">
            <header className="head-container">
                <div className="top-message">
                    <span className="top-message-text">{t('topMessage')}</span>
                </div>
                <nav className="nav-elements">
                    <button className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
                    </button>
                    <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#que-somos" onClick={(e) => handleNavClick(e, '#que-somos')}>{t('navWhatWeAre')}</a></li>
                        <li><a href="#que-hacemos" onClick={(e) => handleNavClick(e, '#que-hacemos')}>{t('navWhatWeDo')}</a></li>
                        <li><a href="#mi-experiencia" onClick={(e) => handleNavClick(e, '#mi-experiencia')}>{t('navMyExperience')}</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <div>
                    <section className="hero-section">
                        <div className="hero-background">
                            <div className="hero-gradient-overlay"></div>
                        </div>
                        <div className="hero-content">
                            <div className="hero-logo">
                                <a href="https://fuego-de-vida.org">
                                    <img src={logo} alt="Fuego de Vida Logo" className="hero-logo-img" />
                                </a>
                            </div>
                            <div className="hero-badge">
                                <span className="hero-badge-dot"></span>
                                {t('heroBadge')}
                            </div>
                            <h1 className="hero-title">
                                <TypingEffect
                                    texts={[
                                        t('heroTyping1'),
                                        t('heroTyping2'),
                                        t('heroTyping3'),
                                        t('heroTyping4')
                                    ]}
                                    speed={100}
                                    loop
                                />
                                <span className="hero-title-highlight">{t('heroHighlight')}</span>
                            </h1>
                            <p className="hero-subtitle">
                                {t('heroSubtitle')}
                            </p>
                            <div className="hero-cta-container">
                                <a href="tel:+1(779)248-1169" className="hero-cta-primary">
                                    <FontAwesomeIcon icon={faWhatsapp} className="hero-cta-icon" />
                                    {t('heroWhatsapp')}
                                </a>
                                <a href="mailto:ayuda@fuegodevidausa.org" className="hero-cta-secondary">
                                    <FontAwesomeIcon icon={faEnvelope} className="hero-cta-icon" />
                                    {t('heroEmail')}
                                </a>
                            </div>
                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <span className="hero-stat-number">7+</span>
                                    <span className="hero-stat-label">IL & MS</span>
                                </div>
                                <div className="hero-stat-divider"></div>
                                <div className="hero-stat">
                                    <span className="hero-stat-number">13-70</span>
                                    <span className="hero-stat-label">{t('heroStat2Label')}</span>
                                </div>
                                <div className="hero-stat-divider"></div>
                                <div className="hero-stat">
                                    <span className="hero-stat-number">24/7</span>
                                    <span className="hero-stat-label">{t('heroStat3Label')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src={fireImage} alt="Fuego de Vida" />
                        </div>
                    </section>
                    <div className="info-section">
                        <div className="info-section-header fade-in-section">
                            <span className="info-section-badge">{t('infoSectionBadge')}</span>
                            <h2 className="info-section-title">{t('infoSectionTitle')}</h2>
                        </div>
                        <section className="info-cards-row fade-in-section">
                            <div className="info-card-modern">
                                <div className="info-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 22V19C8 19 9 17 12 17C15 17 16 19 16 19V22" />
                                        <path d="M12 17C12 17 12 15 12 13C12 11 10 9 10 7C10 5 11 3 12 2C13 3 14 5 14 7C14 9 12 11 12 13" />
                                        <path d="M8 7C8 7 6 8 6 10C6 12 8 13 8 13" />
                                        <path d="M16 7C16 7 18 8 18 10C18 12 16 13 16 13" />
                                    </svg>
                                </div>
                                <h3>{t('card1Title')}</h3>
                                <p>{t('card1P1')}</p>
                                <p>{t('card1P2')}</p>
                                <p>{t('card1P3')}</p>
                            </div>
                            <div className="info-card-modern">
                                <div className="info-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6V12L16 14" />
                                        <path d="M8 15C8 15 9.5 17 12 17C14.5 17 16 15 16 15" strokeDasharray="2 2" />
                                    </svg>
                                </div>
                                <h3>{t('card2Title')}</h3>
                                <p>{t('card2P1')}</p>
                                <p>{t('card2P2')}</p>
                                <p>{t('card2P3')}</p>
                            </div>
                            <div className="info-card-modern">
                                <div className="info-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" />
                                        <path d="M22 2L13 11" />
                                        <path d="M16 2H22V8" />
                                        <path d="M8 14C8 14 9 16 12 16C15 16 16 14 16 14" strokeDasharray="2 2" />
                                        <circle cx="9" cy="10" r="1" fill="currentColor" />
                                        <circle cx="15" cy="10" r="1" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3>{t('card3Title')}</h3>
                                <p>{t('card3P1')}</p>
                                <p>{t('card3P2')}</p>
                                <p>{t('card3P3')}</p>
                            </div>
                        </section>
                        <section className="info-cards-row fade-in-section">
                            <div className="info-card-modern">
                                <div className="info-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2C8 2 4 6 4 10C4 14 8 18 12 22C16 18 20 14 20 10C20 6 16 2 12 2Z" />
                                        <path d="M12 6V14" />
                                        <path d="M8 10H16" />
                                    </svg>
                                </div>
                                <h3>{t('card4Title')}</h3>
                                <p>{t('card4P1')}</p>
                                <p>{t('card4P2')}</p>
                                <p>{t('card4P3')}</p>
                            </div>
                            <div className="info-card-modern">
                                <div className="info-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="9" r="5" />
                                        <circle cx="15" cy="15" r="5" />
                                        <path d="M12 12L14 10" />
                                    </svg>
                                </div>
                                <h3>{t('card5Title')}</h3>
                                <p>{t('card5P1')}</p>
                                <p>{t('card5P2')}</p>
                            </div>
                        </section>
                        <section className='mapContainer fade-in-section'>
                            <h2 className='fade-in-section'>{t('mapTitle')}</h2>
                            <h3 className='fade-in-section'>{t('mapSubtitle')}</h3>
                            <div className="map-container fade-in-section">
                                <iframe src="https://www.google.com/maps/d/embed?mid=1GmrFE4RYYe3ZI-zEHVFDaYbjGdq23Tc&ehbc=2E312F&noprof=1" width="940" height="480" title="Map"></iframe>
                            </div>
                        </section>

                        <section id="que-somos" className="quesomos-section fade-in-section">
                            <div className="quesomos-container">
                                <div className="section11">
                                    <h2>{t('queSomosTitle')}</h2>
                                    <p>{t('queSomosText')}</p>
                                    <div className="boardrow">
                                        <img src={people} alt="People" />
                                        <div className="textcolum">
                                            <h4>{t('queSomosAgeTitle')}</h4>
                                            <p>{t('queSomosAgeText')}</p>
                                        </div>
                                        <a href="#que-no-somos" className="learn-more-button">{t('learnMore')}</a>
                                    </div>
                                </div>
                                <div className="section22">
                                    <img src={coffee} alt="Coffee" />
                                </div>
                            </div>
                        </section>

                        <div className='bubblesectioncontainer fade-in-section'>
                            <Bubbles />
                        </div>

                        <section className="nueva-section fade-in-section">
                            <div className="nuevavision-container" id="que-hacemos">
                                <div className='leftside'>
                                    <div className='span-hacemos'>{t('queHacemosLabel')}</div>
                                    <div className='leftsideimage'>
                                        <img src={searching} alt="woman-searching" className='searching'/>
                                    </div>
                                </div>
                                <div className="section11">
                                    <h2>{t('nuevaVisionTitle')}</h2>
                                    <p>{t('nuevaVisionText')}</p>
                                    <div className='quehacemos button'>
                                        <a href="#por-que-lo-hacemos" className="learn-more-buton">{t('learnMore')}</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="custom-image-container fade-in-section">
                            <img src={enferm} alt="Background" className="custom-scrolling-image" ref={imgRef} />
                            <div className='custom-overlay-container'>
                                <div className="custom-content-overlay fade-in-bottom">
                                    <h2 id="por-que-lo-hacemos">{t('porQueTitle')}</h2>
                                    <p>{t('porQueText')}</p>
                                    <a href="#mi-experiencia" id="testimonios" className="custom-btn">{t('knowMore')}</a>
                                </div>
                            </div>
                        </section>

                        <section id="mi-experiencia" className="experience-container fade-in-section">
                            <div className="left-column">
                                <div className="step fade-in-right">
                                    <h2>01</h2>
                                    <div>
                                        <h4>{t('expStep1Title')}</h4>
                                        <p>{t('expStep1Text')}</p>
                                    </div>
                                </div>
                                <div className="step fade-in-left">
                                    <h2>02</h2>
                                    <div>
                                        <h4>{t('expStep2Title')}</h4>
                                        <p>{t('expStep2Text')}</p>
                                    </div>
                                </div>
                                <div className="step fade-in-right">
                                    <h2>03</h2>
                                    <div>
                                        <h4>{t('expStep3Title')}</h4>
                                        <p>{t('expStep3Text')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="header">
                                    <h2>{t('expHeader')}</h2>
                                    <h1>
                                        <TypingEffect
                                            texts={[t('expMoment')]}
                                            speed={150}
                                            pause={100000}
                                            loop={false}
                                        />
                                    </h1>
                                    <p>{t('expDescription')}</p>
                                    <a href="tel:+6306868599" className='learn-more-buton'>{t('expStart')}</a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer className="footer">
                        <div className="footer-content">
                            <h2>{t('footerTitle')}</h2>
                            <div className="contacts">
                                <a href="tel:+1(779)248-1169" className="contact-link">
                                    <div className="contact">
                                        <FontAwesomeIcon className="icon" icon={faWhatsapp} size="4x" />
                                        <span>{t('footerWhatsapp')}</span>
                                        <p>{t('footerWhatsappText')}</p>
                                    </div>
                                </a>
                                <div className="contact">
                                    <a href="mailto:ayuda@fuegodevidausa.org" className="contact-link">
                                        <FontAwesomeIcon className="icon" icon={faEnvelope} size="4x" />
                                        <span>{t('footerEmail')}</span>
                                        <p>{t('footerEmailText')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>{t('footerCopyright')}</p>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/agua_viva_ip" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" />
                                </a>
                                <a href="https://www.facebook.com/aguavivaosgr7/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" />
                                </a>
                                <a href="tel:630-686-8599" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="phone-icon" icon={faPhone} />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
