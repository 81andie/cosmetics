import React from 'react'
import './Nosotros.css';
import { useTranslation } from 'react-i18next';

export const Nosotros = () => {

  const { t } = useTranslation();

  
  return (
    <>
      <div className="sobre_nosotrosPresentacion">
        <h1>{t('SobreNosotros.aboutus')}</h1>
        <span>{t('SobreNosotros.Fundation')}</span>
        <h1>{t('SobreNosotros.Ourstore1')}</h1>
        <span>{t('SobreNosotros.Ourstore')}</span>
       
      
      </div>

      <figure>
        <img src="https://img.freepik.com/fotos-premium/hay-tienda-monton-botellas-frascos-exhibicion-generativa-ai_1028863-43627.jpg?w=1060" className="img_perfumeria" alt="imagen de la perfumeria" />
        <figcaption>{t('SobreNosotros.OurstoreImg')}</figcaption>
      </figure>
    </>
  )
}

