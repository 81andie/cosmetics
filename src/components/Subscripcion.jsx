import React from 'react'

export const Subscripcion = () => {
    return (
<>
     
        <div className="Subscribir_titulo" >
        <h1>No te pierdas, <br/>nada de nada... </h1>
        </div>

        <section className="subscripcion">


            <img src="https://img.freepik.com/foto-gratis/cerrar-sonriente-modelo-posando-planta_23-2148888223.jpg?t=st=1718467485~exp=1718471085~hmac=480be55be8d4dd1eaa3ffa6e00c7d53646ab5fbde5fa500853a6472c90d18a53&w=360" />

            <div className="container_subscripción">

                <h3>Formaliza tu inscripción aqui!</h3>
                <h1>Sólo por inscribirte, recibirás al instante a tu correo, un 50% de descuento en tu próxima compra</h1>

                <div className="form_container">
                    <form>
                        <label for="fname">Nombre y apellidos:</label><br />
                        <input type="text" id="fname" name="fname" placeholder="Tu nombre y apellidos" /><br />

                        <label for="email">Tu correo electrónico</label><br />
                        <input type="email" id="lname" name="email" placeholder="Email" /><br />
                        {/*<input type="submit" value="Enviar" className="btnfos btnfos-1" />*/}
                        <button className="enviar_btn"><a className="btnfos btnfos-1">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100% " />

                            </svg>
                            ENVIAR
                        </a>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        </>
    )
}
