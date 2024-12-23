import React from 'react'
import './Subscripcion.css';
import { useTranslation } from 'react-i18next';

export const Subscripcion = () => {
    const { t } = useTranslation();

    return (
<>
     
        <div className="Subscribir_titulo" >
        <h1> {t('SobreNosotros.Dont miss')} </h1>
        </div>

        <section className="subscripcion">

            <img src="https://img.freepik.com/foto-gratis/cerrar-sonriente-modelo-posando-planta_23-2148888223.jpg?t=st=1718467485~exp=1718471085~hmac=480be55be8d4dd1eaa3ffa6e00c7d53646ab5fbde5fa500853a6472c90d18a53&w=360" alt="modelo sonriente" className="img_subscription"/>

            <div className="container_subscripción">

                <h3>{t('SobreNosotros.Formalize')}</h3>
                <h1>{t('SobreNosotros.Just for')}</h1>

                <div className="form_container">
                    <form>
                        <label htmlFor="fname">{t('SobreNosotros.Name')}</label><br />
                        <input type="text" id="fname" name="fname" placeholder="Tu nombre y apellidos" /><br />

                        <label htmlFor="email">{t('SobreNosotros.Email')}</label><br />
                        <input type="email" id="lname" name="email" placeholder="Email" /><br />
                        {/*<input type="submit" value="Enviar" className="btnfos btnfos-1" />*/}
                        <button className="enviar_btn"><a className="btnfos btnfos-1">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100% " />

                            </svg>
                            {t('SobreNosotros.Send')}
                        </a>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        </>
    )
}
