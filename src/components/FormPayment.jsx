import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';




export const FormPayment = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const storedProducts = localStorage.getItem('cart');




        if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts);

            console.log('Productos recuperados de localStorage:', parsedProducts);
            setProducts(parsedProducts);


        } else {
            console.log('No products found in localStorage.');
        }

    }, []);


    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };



    const productTemplate = (product) => {


        return (
            <div className="border-1 surface-border border-round m-1 text-center py-3 px-2 card_payment">
                <div className="mb-2">
                    <img src={`/images/${product.image}`} alt={product.name} className="shadow-2 image-products2 " />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">

                    </div>
                </div>
            </div>
        );
    };







    return (
        <>
            <div className="Subscribir_titulo" >
                <h1>Ahora si, <br />formaliza tu pedido </h1>
            </div>

            <section className="subscripcion">


                <img src="https://img.freepik.com/foto-gratis/blogger-alto-angulo-estudio-listo-filmar_23-2148360165.jpg?t=st=1720361188~exp=1720364788~hmac=61215e54c8b6e49e6bb5d5220ebcdcbb2f4fb1a222b2ad8e5fc813a377112fed&w=360" />

                <div className="container_subscripción">

                    <h3>Formaliza tu compra aqui (paso 1)</h3>
                    <h1>Por favor, inscribe tu nombre, apellidos y dirección</h1>

                    <div className="form_container">
                        <form>
                            <label htmlFor="fname">Nombre y apellidos:</label><br />
                            <input type="text" id="fname" name="fname" placeholder="Tu nombre y apellidos" /><br />

                            <label htmlFor="email">Tu correo electrónico</label><br />
                            <input type="email" id="lname" name="email" placeholder="Email" /><br />
                            {/*<input type="submit" value="Enviar" className="btnfos btnfos-1" />*/}

                            <label htmlFor="fname">Dirección:</label><br />
                            <input type="text" id="fname" name="fname" placeholder="dirección" /><br />
                            <button className="enviar_btn"><a className="btnfos btnfos-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100% " />

                                </svg>
                                Seguir
                            </a>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="card5">

                <section class="steps_informacion">

                    <h1 class="steps_titulo">Tus productos</h1>
                    <h3 class="steps_subs">Paso 2, comprueba que todo esté correcto</h3>

                </section>

            </div>

            <section className="carrusel_pedido">

                <Carousel value={products} numVisible={3} numScroll={3} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate}

                />

                <img src="https://img.freepik.com/foto-gratis/gafas-sentado-portatil-credito-positivo_1262-2825.jpg?t=st=1720366720~exp=1720370320~hmac=c20f68c9490af04eb8f707dced9faec0fe6ed8555c02de85bb960a0adabb4011&w=360" className="img-carr-payment" />


            </section>



            <div className="Subscribir_titulo" >
                <h1>Ahora si, <br />Casi ya estamos!! </h1>
            </div>

            <section className="subscripcion">


                <img src="https://img.freepik.com/vector-premium/tarjeta-credito-bancaria-dos-caras-anverso-reverso-tarjeta-debito-realista-detallada-sobre-fondo-blanco-diseno-plantilla-tarjeta-credito-presentacion-simbolo-pago-dinero_93083-3211.jpg?w=360" />

                <div className="container_subscripción">

                    <h3>Intrudoduce los datos de tu tarjeta</h3>
                    <h1>Por favor, inscribe tu nº de tarjeta, caducidad y Cod.seguridad</h1>

                    <div className="form_container">
                        <form>
                            <label htmlFor="ftarget">Número de tarjeta:</label><br />
                            <input type="number" id="fname" name="fname" placeholder="Tu nombre y apellidos" /><br />

                            <label htmlFor="caducidad">Tu correo electrónico</label><br />
                            <input type="date" id="data" name="data" placeholder="Data" /><br />
                            {/*<input type="submit" value="Enviar" className="btnfos btnfos-1" />*/}

                            <label htmlFor="fsegurity">Dirección:</label><br />
                            <input type="number" id="fseguridad" name="fname" placeholder="Código de seguridad" /><br />
                            <button className="enviar_btn"><a className="btnfos btnfos-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100% " />

                                </svg>
                                Pagar
                            </a>
                            </button>
                        </form>
                    </div>
                </div>
            </section>





        </>
    )
}
