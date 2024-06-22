import React, { useEffect, useState } from 'react';
import './Bubbles.css';

const Bubbles = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    const animateValue = (start, end, duration, element, index) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.innerHTML = end.toLocaleString() + "+"; // Add "+" sign when done
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        const bubblesSection = document.getElementById('bubbles-section');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !startAnimation) {
                        setStartAnimation(true);
                        document.querySelectorAll('.bubble-number').forEach((bubble, index) => {
                            const endValues = [35000, 80, 20];
                            animateValue(0, endValues[index], 2000, bubble, index);
                        });
                        observer.disconnect(); // Stop observing after animation starts
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        observer.observe(bubblesSection);

        return () => {
            observer.disconnect();
        };
    }, [startAnimation]);

    return (
        <section id="bubbles-section" className="quesomos-section">
            <div className="nosomos-container">
                <div className="section11">
                    <h4>¿QUÉ NO SOMOS?</h4>
                    <h2 className="dia">No somos profesionales, pero sabemos lo que hacemos</h2>
                    <p>No somos AA, las problemáticas a las que atendemos no se centran únicamente en el consumo de alcohol o drogas, tampoco somos una religión, nuestros miembros son libres de profesar cualquier creencia o credo e incluso de no hacerlo. No somos una secta, si tu llegas a cualquier grupo de Agua Viva, serás bienvenido, y estarás en toda la libertad de elegir ser o no parte de nuestra comunidad. No somos profesionales y no pretendemos serlo, nuestro trabajo no es experimental, Agua Viva tiene más de 20 años en los cuales hemos logrado influir positivamente en la vida de miles de personas.</p>
                    <a href="#que-hacemos" className="learn-more-buton">Conocer más</a>
                </div>
                <div className="bubbles-container">
                    <div className="bubble blue">
                        <div className="bubble-number">0</div>
                        <div className="bubble-text">Más de 35,000 vidas cambiadas</div>
                    </div>
                    <div className="bubble light-blue">
                        <div className="bubble-number">0</div>
                        <div className="bubble-text">Más de 80 grupos entre México y Estados Unidos</div>
                    </div>
                    <div className="bubble beige">
                        <div className="bubble-number">0</div>
                        <div className="bubble-text">Más de 20 años de funcionamiento</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bubbles;
