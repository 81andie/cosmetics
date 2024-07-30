import React from 'react';
import './NuestrasMarcas.css';
import { useTranslation } from 'react-i18next';

export const NuestrasMarcas = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className="nuestrasMarcas" id="marcas">

                <h1>{t('SobreNosotros.Our brands')}</h1>

                <div className="marcas">
                    
                    <img src="/cosmetics/images/dior logo.png" className="marca_logo1" alt="logo de la marca Dior" />
                    <img src="/cosmetics/images/Touslogo.webp" className="marca_logo1" alt="logo de la marca Tous" />
                    <img src="/cosmetics/images/gucci.jpg" className="marca_logo1" alt="logo de la marca Gucci" />
                    <img src="/cosmetics/images/logoguerlain.png" className="marca_logo1" alt="logo de la marca Guerlain" />
                    <img src="/cosmetics/images/logoCH.webp" className="marca_logo1" alt="logo de la marca Carolina Herrera" />
                    <img src="/cosmetics/images/logo lancome.webp" className="marca_logo1" alt="logo de la marca Lancome" />
                    <img src="/cosmetics/images/logo joemalone.jpg" className="marca_logo1" alt="logo de la marca Joe Malone" />
                    <img src="/cosmetics/images/logo giorgioarmani.jpg" className="marca_logo1" alt="logo de la marca Giorgio Armani" />
                    <img src="/cosmetics/images/guccilogo.avif" className="marca_logo1" alt="logo de la marca Gucci" />
                    <img src="/cosmetics/images/cliniquelogo.png" className="marca_logo1" alt="logo de la marca Clinique" />
                    <img src="/cosmetics/images/siheidologo.png" className="marca_logo1" alt="logo de la marca Shisheido" />
                    <img src="/cosmetics/images/elisabet.png" className="marca_logo1" alt="logo de la marca Elisabet Arden" />

                </div>

            </div>

        </>
    )
}
