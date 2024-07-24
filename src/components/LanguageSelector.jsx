import React from 'react'
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    return (
      <div>
        <button onClick={() => changeLanguage('en')} className="boton_lenguaje">English</button>
        <button onClick={() => changeLanguage('es')} className="boton_lenguaje">Español</button>
        <button onClick={() => changeLanguage('ca')}className="boton_lenguaje">Català</button>
      </div>
    );
  }
  
  export default LanguageSelector;