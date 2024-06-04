import React from 'react'
import { Footer } from './Footer'

export const Inicio = () => {
  return (
    <>
    <div className ="sobre_nosotros">
      <h1>Sobre Nosotros</h1>
      <div className="container_sobreNosotros">
      <img src="https://img.freepik.com/fotos-premium/producto-cuidado-piel-primer-plano-exhibicion-elegante-producto_1004086-1847.jpg?w=900" className="img_sobrenosotros"/>
    <span className="parr_sobreNosotros">Fundada en 1950, Cleopatra nació de la idea de crear una experiencia de compra única para los amantes de la belleza. Nos inspiramos en la naturaleza y la ciencia para seleccionar los mejores productos para ti.</span>
    <span className="parr_sobreNosotros"></span>
    
    </div>
    </div>

    <div className="nuestrasMarcas" id="marcas">
      <h1>Nuestras marcas</h1>
      <img src="images/dior logo.png" className="marca_logo1"/>
      <img src="images/Touslogo.webp" className="marca_logo1"/>
      <img src="images/gucci.jpg" className="marca_logo1"/>
      <img src="images/logoguerlain.png" className="marca_logo1"/>
      <img src="images/logoCH.webp" className="marca_logo1"/>
      <img src="images/logo lancome.webp" className="marca_logo1"/>
      <img src="images/logo joemalone.jpg" className="marca_logo1"/>
      <img src="images/logo giorgioarmani.jpg" className="marca_logo1"/>
      <img src="images/guccilogo.avif" className="marca_logo1"/>
      <img src="images/cliniquelogo.png" className="marca_logo1"/>
      <img src="images/siheidologo.png" className="marca_logo1"/>
      <img src="images/elisabet.png" className="marca_logo1"/>
      
      
    </div>

    <Footer/>
    </>
  )
}
