import React from 'react'
import 'primeicons/primeicons.css';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

  const { t } = useTranslation();
  return (
    <>
      <section className='informacion_container'>

        <div className="container_info_footer">
          <i className="pi pi-truck"> {t('SobreNosotros.Free shipping')}</i>

          <span>30 Euros</span>
          <span>{t('SobreNosotros.Delivery')}</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-star"> {t('SobreNosotros.samples')}</i>
          <span>{t('SobreNosotros.sampleschoose')}</span>
          <span>{t('SobreNosotros.choose')}</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-undo"> {t('SobreNosotros.returns')}</i>
          <span>{t('SobreNosotros.Return')}</span>
          <span>{t('SobreNosotros.up to 60 days')}</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-ticket"> {t('SobreNosotros.Click & Collect')}</i>
          <span>{t('SobreNosotros.Collection')}</span>
       
        </div>

        <div className="container_info_footer">
          <i className="pi pi-map-marker"> {t('SobreNosotros.Collection1')}</i>
          <span>{t('SobreNosotros.Receive your order')}</span>
         
        </div>

      </section>


      <section className="logo_section_footer">
        <img src="/cosmetics/logo.jpg" className="logo_footer" />
      </section>

      <div className='container_footer_redes'>

        <i className="pi pi-instagram" style={{ color: 'white' }}></i>
        <i className="pi pi-youtube" style={{ color: 'white' }}></i>
        <i className="pi pi-facebook" style={{ color: 'white' }}></i>
        <i className="pi pi-telegram" style={{ color: 'white' }}></i>

      </div>

      <section className="footer">

        <div className='container_info_empresa'>
          <ul><h1>{t('SobreNosotros.Find us')}</h1>
            <li> {t('SobreNosotros.Address')}</li>
            <li>{t('SobreNosotros.Phone')}</li>
            <li>{t('SobreNosotros.Mail')}</li></ul>


        </div>

        <div className='container_info_empresa'>
          <ul><h1>{t('SobreNosotros.Information')}</h1>
            <li>{t('SobreNosotros.Customer service')}</li>
            <li>{t('SobreNosotros.Schedule an appointment in store')}</li>
            <li>{t('SobreNosotros.Order issues')}</li>
            <li>{t('SobreNosotros.24-hour customer service')}</li></ul>

        </div>

      </section>



    </>
  )
}
