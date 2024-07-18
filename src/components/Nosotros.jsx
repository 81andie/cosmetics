import React from 'react'
import './Nosotros.css';

export const Nosotros = () => {
  return (
    <>
      <div className="sobre_nosotrosPresentacion">
        <h1>Sobre <br />Nosotros</h1>
        <span>Fundada en 1910, Cleopatra nació de la idea de crear una experiencia de compra única para los amantes de la belleza. Nos inspiramos en la naturaleza y la ciencia para seleccionar los mejores productos para ti.</span>
        <h1>Nuestra <br /> tienda</h1>
        <span> Cleopatra, a sobrevivido en el tiempo, en las guerras y en épocas dónde hacerse un hueco en la supervivéncia, es una esencia de resistencia y resilencia. Una empresa familiar, dónde la 3a generación de la família toma las  riendas, hacia la modernidad, buscando las mejores exclusividades en todo tipo de marcas de lujo.</span>
      </div>

      <figure>
        <img src="https://img.freepik.com/fotos-premium/hay-tienda-monton-botellas-frascos-exhibicion-generativa-ai_1028863-43627.jpg?w=1060" className="img_perfumeria" alt="imagen de la perfumeria" />
        <figcaption>Nuestra perfumeria en el año 1921</figcaption>
      </figure>
    </>
  )
}

