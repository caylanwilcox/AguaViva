import React, { useEffect, useState } from 'react';

const TypingEffect = ({ texts, speed, pause, loop }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[textIndex];
            const updatedText = isDeleting
                ? currentFullText.substring(0, currentText.length - 1)
                : currentFullText.substring(0, currentText.length + 1);

            setCurrentText(updatedText);

            if (!isDeleting && updatedText === currentFullText) {
                setTimeout(() => setIsDeleting(true));
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const typingSpeed = isDeleting ? speed *1.2 : speed;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, textIndex, texts, speed, pause]);

    return <span>{currentText}</span>;
};

TypingEffect.defaultProps = {
    speed: 500,
    loop: true,

};

export default TypingEffect;
