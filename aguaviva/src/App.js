import React from 'react';
import HomePage from './components/HomePage';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import './App.css';

function AppContent() {
  const { language } = useLanguage();

  if (!language) {
    return <LanguageSelector />;
  }

  return <HomePage />;
}

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <AppContent />
      </div>
    </LanguageProvider>
  );
}

export default App;
