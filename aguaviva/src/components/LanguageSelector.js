import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../Images/Newlogo.jpeg';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  return (
    <div className="language-selector-container">
      <header className="language-selector-header">
        <img src={logo} alt="Fuego de Vida Logo" className="language-selector-logo" />
      </header>
      <div className="language-selector-content">
        <h1 className="language-selector-title">Welcome / Bienvenido</h1>
        <p className="language-selector-subtitle">Please select your language / Por favor selecciona tu idioma</p>
        <div className="language-buttons">
          <button
            className="language-button english"
            onClick={() => setLanguage('en')}
          >
            <span className="language-flag">EN</span>
            <span className="language-name">English</span>
          </button>
          <button
            className="language-button spanish"
            onClick={() => setLanguage('es')}
          >
            <span className="language-flag">ES</span>
            <span className="language-name">Español</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
