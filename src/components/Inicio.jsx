import React from 'react'
import { Footer } from './Footer'

export const Inicio = () => {
  return (
    <>

<div className ="sobre_nosotrosPresentacion">
      <h1>Sobre Nosotros</h1>
      {/*<iframe  src="images/MISS DIOR - THE NEW PARFUM.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className="iframe_sobrenosotros"></iframe>*/}
    
    <span className="parr_sobreNosotros">Fundada en 1950, Cleopatra nació de la idea de crear una experiencia de compra única para los amantes de la belleza. Nos inspiramos en la naturaleza y la ciencia para seleccionar los mejores productos para ti.</span>
   

</div>
   
   


   
<div className="nuestrasMarcas" id="marcas">

    <h1>Nuestras marcas</h1>

    <div className="marcas">
      <img src="images/dior logo.png" className="marca_logo1"/>
      <img src="images/Touslogo.webp" className="marca_logo1"/>
      <img src="images/gucci.jpg" className="marca_logo1"/>
      <img src="images/logoguerlain.png" className="marca_logo1"/>
      <img src="images/logoCH.webp" className="marca_logo1"/>
      <img src="images/logo lancome.webp" className="marca_logo1"/>
      <img src="images/logo joemalone.jpg" className="marca_logo1"/>
      <img src="images/logo giorgioarmani.jpg" className="marca_logo1"/>
     
      <img src="images/cliniquelogo.png" className="marca_logo1"/>
      <img src="images/siheidologo.png" className="marca_logo1"/>
      <img src="images/elisabet.png" className="marca_logo1"/>
      
      

      </div>
   
   
    </div>

   

    

    <Footer/>
    </>
  )
}
