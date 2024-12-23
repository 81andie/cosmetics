import React from 'react'
import './Contacto.css';
import { Mapa } from './Mapa';

export const Contacto = () => {
    return (
        <>
        <section className="Contacto">
            <h1 className="titulo_contacto"> Nuestro Equipo</h1>
            <div className="parr_container">
                <img src="https://img.freepik.com/foto-gratis/sonriente-mujer-empresa-lider-brazos-cruzado_1262-3089.jpg?t=st=1721315464~exp=1721319064~hmac=4c4787724a918477394c720cf84186154fb6768c79ca136ccb25ec030300ff6f&w=900" className="imgEquipo" alt="imagen gerente"></img>
                <div>
                    <h3><strong>Gerente</strong></h3>
                    <h1 className="nombre">Maria Delgado Suárez</h1>

                    <h4>A cargo de la empresa desde el 2022, licenciada <br />en Marqueting Profesional,por la Universidad Complutense. <br />Desde la jubilación de sus padres se mantiene a cargo de la empresa</h4>
                    <h4>email@gmail.com</h4>
                </div>

            </div>


            <div className="parr_container">

                <img src="https://img.freepik.com/foto-gratis/mujer-ejecutiva-negocios-oficina_1303-16020.jpg?t=st=1721316388~exp=1721319988~hmac=42a5a507c6d53b7d77eaae139bf7f262f0a90093faac9e2fc3394e386566f478&w=900" className="imgEquipo" alt="imagen manager comunicaciones"></img>
                <div>
                    <h3><strong>Manager Comunicaciones</strong></h3>
                    <h1 className="nombre">Mariana Rojas Vetina</h1>

                    <h4>Encargada de gestión de la página web y los pedidos online.<br />Para dudas sobre pedidos de la tienda pueden contactarConmigo</h4>
                    <h4>email@gmail.com</h4>
                </div>

            </div>

            <div className="parr_container">

                <img src="https://img.freepik.com/foto-gratis/joven-sonriente-escribe-su-smartphone_641386-387.jpg?t=st=1721317145~exp=1721320745~hmac=791d59126755afc827fd5c5051e5b08a37b1ab53ab095db4f6051653a4584320&w=900" className="imgEquipo" alt="imagen responsable atencion al cliente en tienda"></img>
                <div>
                    <h3><strong>Atención al Cliente en tienda</strong></h3>
                    <h1 className="nombre">Andrea Rodes Sánchez</h1>

                    <h4>Diplomada en estética, déjate aconsejar en todo lo que necesitas, <br/>Andrea te dará un servicio impecable y profesional</h4>
                    <h4>email@gmail.com</h4>
                </div>

            </div>

        </section>

        <Mapa/>
        </>
    )
}
