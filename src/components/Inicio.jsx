import React from 'react'


export const Inicio = () => {
 


  return (
    <>


      <div className="sobre_nosotrosPresentacion">

        <h1>Sobre <br />Nosotros</h1>


        {/*<iframe  src="images/MISS DIOR - THE NEW PARFUM.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className="iframe_sobrenosotros"></iframe>*/}

        <span>Fundada en 1910, Cleopatra nació de la idea de crear una experiencia de compra única para los amantes de la belleza. Nos inspiramos en la naturaleza y la ciencia para seleccionar los mejores productos para ti.</span>

        <span> Cleopatra, a sobrevivido en el tiempo, en las guerras y en épocas dónde hacerse un hueco en la supervivéncia, es una esencia de resistencia y resilencia. Una empresa familiar, dónde la 3a generación de la família toma las  riendas, hacia la modernidad, buscando las mejores exclusividades en todo tipo de marcas de lujo.</span>
        <h1>Nuestra <br /> tienda</h1>


      </div>

      <figure>
        <img src="https://img.freepik.com/fotos-premium/hay-tienda-monton-botellas-frascos-exhibicion-generativa-ai_1028863-43627.jpg?w=1060" className="img_perfumeria" />
        <figcaption>Nuestra perfumeria en el año 1921</figcaption>

      </figure>



      <div className="nuestrasMarcas" id="marcas">

     

        <h1>Nuestras marcas</h1>

        <div className="marcas">
          <img src="images/dior logo.png" className="marca_logo1" />
          <img src="images/Touslogo.webp" className="marca_logo1" />
          <img src="images/gucci.jpg" className="marca_logo1" />
          <img src="images/logoguerlain.png" className="marca_logo1" />
          <img src="images/logoCH.webp" className="marca_logo1" />
          <img src="images/logo lancome.webp" className="marca_logo1" />
          <img src="images/logo joemalone.jpg" className="marca_logo1" />
          <img src="images/logo giorgioarmani.jpg" className="marca_logo1" />
          <img src="images/cliniquelogo.png" className="marca_logo1" />
          <img src="images/siheidologo.png" className="marca_logo1" />
          <img src="images/elisabet.png" className="marca_logo1" />
          <img src="images/aqua di parma.jpg" className="marca_logo1" />



        </div>

      </div>


      <section className="subscripcion">


        <img src="https://img.freepik.com/foto-gratis/cerrar-sonriente-modelo-posando-planta_23-2148888223.jpg?t=st=1718467485~exp=1718471085~hmac=480be55be8d4dd1eaa3ffa6e00c7d53646ab5fbde5fa500853a6472c90d18a53&w=360" />

        <div className="container_subscripción">

          <h3>Formaliza tu inscripción aqui!</h3>
          <h1>Sólo por inscribirte, recibirás al instante a tu correo, un 50% de descuento en tu próxima compra</h1>

          <div className="form_container">
            <form>
              <label for="fname">First name:</label><br />
              <input type="text" id="fname" name="fname" placeholder="tu nombre y apellidos" /><br />

              <label for="email">Tu correo electrónico</label><br />
              <input type="email" id="lname" name="email" placeholder="email" /><br />
              <input type="submit" value="Enviar" className="submit_button" />
            </form>
          </div>

        </div>
      </section>


     
    </>
  )
}
