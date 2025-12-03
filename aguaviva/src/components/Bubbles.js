import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Bubbles.css';

const Bubbles = () => {
    const { t } = useLanguage();
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
                            const endValues = [15000, 7, 19];
                            animateValue(0, endValues[index], 4000, bubble, index);
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
        <section className="quesomos-section" id="que-no-somos">
            <div id="bubbles-section" className="nosomos-container">
                <div className="section11 fade-in-left">
                    <h4>{t('queNoSomosTitle')}</h4>
                    <h2 className="dia">{t('queNoSomosSubtitle')}</h2>
                    <p>{t('queNoSomosText')}</p>
                    <a href="#que-hacemos" className="learn-more-buton">{t('learnMore')}</a>
                </div>
                <div className="bubbles-container fade-in-right ">
                    <div className="bubble blue ">
                        <div className="bubble-number">0</div>
                        <div className="bubble-text">{t('bubble1Text')}</div>
                    </div>
                    <div className="bubble light-blue">
                        <div className="bubble-number">0</div>
                        <div className="bubble-text">{t('bubble2Text')}</div>
                    </div>
                    <div className="bubble beige">
                        <div className="bubble-number">0</div>
                        <div className="bubble-text">{t('bubble3Text')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bubbles;
