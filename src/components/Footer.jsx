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

      <div className="social_icons1">
          <h1>Encuentranos en</h1>
       
          <img src="logo.jpg" className="logo_empresa_footer" />
         
       <i className="pi pi-instagram" style={{ color: 'white' }}></i>
       <i className="pi pi-youtube" style={{ color: 'white' }}></i>
       <i className="pi pi-facebook" style={{ color: 'white' }}></i>
       <i className="pi pi-telegram" style={{ color: 'white' }}></i>
       </div>


     

        <div className='container_info_empresa'>
       
         
       </div>
        
      

        <div className='container_info_empresa'>
       
        <ul>Ubicación</ul>
          <li>C/Acacias (Narnia)</li>
          <li>telf: XXXXXXXXXXX</li>
          <li>Correo Electrónico:<br/> XXXXXXXXXXX@gmail.com</li>

          
        </div>

        <div className='container_info_empresa'>
        

          <ul>Información</ul>
          <li>Atención al cliente</li>
          <li>Concertar Cita en tienda</li>
        <li>Problemas con el pedido</li>
        <li>Atención al cliente 24 horas</li>

          
        </div>

        <div className='container_info_empresa'>

       
       </div>

      </section>
    </>
  )
}
