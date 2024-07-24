import React from 'react'
import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    return (
<>
   
      <div className="container_btnIdiomas">
      
        <button onClick={() => changeLanguage('en')} className="boton_lenguaje" type="button">English</button>
        <button onClick={() => changeLanguage('es')} className="boton_lenguaje" type="button" >Español</button>
        <button onClick={() => changeLanguage('ca')}className="boton_lenguaje" type="button">Català</button>
      </div>
      </>
    );
  }
  
  export default LanguageSelector;