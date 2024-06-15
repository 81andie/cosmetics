import React from 'react'
import 'primeicons/primeicons.css';

export const Footer = () => {
  return (
    <>
      <section className='informacion_container'>
        <div className="container_info_footer">
          <i className="pi pi-truck"> Envios gratis</i>

          <span>30 Euros</span>
          <span>Entrega 1-2 dias</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-star"> Muestras</i>
          <span>Hasta 2 muestras gratis</span>
          <span>Elige a tu gusto</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-undo"> Devoluciones</i>
          <span>Devuelve cualquier producto gratis</span>
          <span>Hasta 60 dias para cambios y devoluciones</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-ticket"> Click & Collect</i>
          <span>Recoger en 2 horas</span>
          <span>Gratis</span>
        </div>

        <div className="container_info_footer">
          <i className="pi pi-map-marker"> Puntos de recogida</i>
          <span>Recibe tu pedido en comercios cercanos</span>
          <span>Gratis</span>
        </div>

      </section>

      <section className="footer">

        <div className='container_info_empresa'>
          <img src="logo.jpg" />

          <ul>Ubicación</ul>
          <li>C/Acacias (Narnia)</li>
          <li>telf: XXXXXXXXXXX</li>
          <li>Correo Electrónico: XXXXXXXXXXX@gmail.com</li>

          
        </div>

        <div className='container_info_empresa'>
       

          <ul>Ubicación</ul>
          <li>C/Acacias (Narnia)</li>
          <li>telf: XXXXXXXXXXX</li>
          <li>Correo Electrónico: XXXXXXXXXXX@gmail.com</li>

          
        </div>

        <div className='container_info_empresa'>
        

          <ul>Ubicación</ul>
          <li>C/Acacias (Narnia)</li>
          <li>telf: XXXXXXXXXXX</li>
          <li>Correo Electrónico: XXXXXXXXXXX@gmail.com</li>

          
        </div>


       

      </section>
    </>
  )
}
