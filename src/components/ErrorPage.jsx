import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = () => {
    return (
        <>

            <div className="Disculpa_container">
            <img src="/logo.jpg" className="logo_tienda1" alt="logo" />
                <img src="https://c.tenor.com/fmrdRSoGibYAAAAC/black-lipstick.gif"></img>

            <h1>Lo  sentimos</h1>
            <h3>En estos momentos, no podemos encontrar la páginaque está buscando <br />Si quiere puede esperar y probarlo en otro momento</h3>
        
            <button className="Btn-volver"><Link to="/inicio" className="link">Volver a Inicio</Link></button> 
               
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
