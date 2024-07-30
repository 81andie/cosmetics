import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
    const { t } = useTranslation();

    return (
        <>

            <div className="Disculpa_container">
            <img src="/cosmetics/logo.jpg" className="logo_tienda1" alt="logo" />
                <img src="https://c.tenor.com/fmrdRSoGibYAAAAC/black-lipstick.gif"></img>

            <h1>{t('404.Sorry')}</h1>
            <h3>{t('404.At this')}</h3>
        
            <button className="Btn-volver"><Link to="/inicio" className="link">{t('404.Backto')}</Link></button> 
               
            </div>
               
        
            <div className="error_container">
                <h1 className="error">ERROR</h1>
                <div className="numeros_container">
                    <h1 className="numeros">4</h1>
                    <h1 className="numeros">0</h1>
                    <h1 className="numeros">4</h1>

                 
                </div>
                </div>

          
               
             
              
            

          

        </>
    )
}
