import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { Targeta } from './Targeta';

export const FormPayments = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: ' tu informacion',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: '1º PASO', detail: event.item.label });
            }
        },
        {
            label: 'tus productos',
            command: (event) => {
                toast.current.show({ severity: 'warn', summary: '2º PASO', detail: event.item.label });
            }
        },
        {
            label: '"CLICK" a"payment"',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: '3º PASO', detail: event.item.label });
            }
        },
        {
            label: 'tu confirmación, tu pedido ha sido un éxito',
            command: (event) => {
                toast.current.show({ severity: 'success', summary: '4º paso', detail: event.item.label });
            }
        }
    ];

    const [step, setStep] = useState(1);
    const [products, setProducts] = useState([]);
  

    useEffect(() => {
        const storedProducts = localStorage.getItem('cart');
        if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts);
            setProducts(parsedProducts);
        }
    }, []);

    const handleNextStep = () => {

        if (step < 4) {

            setStep(step + 1);
            setActiveIndex(step)
            items[step].command({ item: items[step] })
        }
    }

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
            setActiveIndex(step - 2);
            items[step - 2].command({ item: items[step - 2] });
        }
    }

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
                    <img src={`/images/${product.image}`} alt={product.name} className="shadow-2 image-products2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                </div>
            </div>
        );
    };

    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '575px', numVisible: 1, numScroll: 1 },
    ];


    return (
        <>

            <section class="steps_informacion">

                <h1 class="steps_titulo">PAYMENT</h1>
                <h3 class="steps_subs">Sigue estos 4 pasos</h3>

                <div className="card4">
                    <Toast ref={toast}></Toast>
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} onClick={handlePreviousStep} />
                </div>

            </section>

            {step === 1 && (
                <div className="payment_titulo">
                    <h1>Ahora si, <br />formaliza tu pedido </h1>
                    <section className="form_payment">
                        <img src="https://img.freepik.com/foto-gratis/blogger-alto-angulo-estudio-listo-filmar_23-2148360165.jpg" alt="Step 1" />
                        <div className="container_payment">
                            <h3>Formaliza tu compra aqui (paso 1)</h3>
                            <h1>Por favor, inscribe tu nombre, apellidos y dirección</h1>
                            <div className="form_container">
                                <form>
                                    <label htmlFor="fname">Nombre y apellidos:</label><br />
                                    <input type="text" id="fname" name="fname" placeholder="Tu nombre y apellidos" /><br />
                                    <label htmlFor="email">Tu correo electrónico</label><br />
                                    <input type="email" id="email" name="email" placeholder="Email" /><br />
                                    <label htmlFor="address">Dirección:</label><br />
                                    <input type="text" id="address" name="address" placeholder="Dirección" /><br />
                                    <button className="enviar_btn" type="button" onClick={handleNextStep}>
                                        <a className="btnfos btnfos-1">
                                            <svg>
                                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                            </svg>
                                            Seguir
                                        </a>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {step === 2 && (
                <div>
                    <div className="card5">
                        <section className="steps_informacion">
                            <h1 className="steps_titulo">Tus productos</h1>
                            <h3 className="steps_subs">Paso 2, comprueba que todo esté correcto</h3>
                        </section>
                    </div>
                    <section className="carrusel_pedido">
                        <Carousel
                            value={products}
                            numVisible={3}
                            numScroll={3}
                            className="custom-carousel"
                            circular
                            autoplayInterval={3000}
                            itemTemplate={productTemplate}
                            responsiveOptions={responsiveOptions}
                        />
                        <img
                            src="https://img.freepik.com/foto-gratis/gafas-sentado-portatil-credito-positivo_1262-2825.jpg"
                            className="img-carr-payment"
                            alt="Payment"
                        />
                        <button className="enviar_btn2" type="button" onClick={handlePreviousStep}>
                            Volver
                        </button>
                        <button className="enviar_btn3" type="button" onClick={handleNextStep}>
                            Seguir
                        </button>
                    </section>
                </div>
            )}

            {step === 3 && (
                <div className="payment_titulo">
                    <h1>Ahora si, <br />Casi ya estamos!!</h1>
                    <section className="form_payment">
                        <img src="https://img.freepik.com/vector-premium/tarjeta-credito-bancaria-dos-caras-anverso-reverso-tarjeta-debito-realista-detallada-sobre-fondo-blanco-diseno-plantilla-tarjeta-credito-presentacion-simbolo-pago-dinero_93083-3211.jpg" alt="fotografia targeta de credito" />
                        <div className="container_payment">
                            <h3>Introduce los datos de tu tarjeta</h3>
                            <h1>Por favor, inscribe tu nº de tarjeta, caducidad y Cod.seguridad</h1>
                            <div className="form_container">
                                <form>
                                    <label htmlFor="cardNumber">Número de tarjeta:</label><br />
                                    <input type="number" id="cardNumber" name="cardNumber" placeholder="Número de tarjeta" /><br />
                                    <label htmlFor="expiryDate">Caducidad:</label><br />
                                    <input type="date" id="expiryDate" name="expiryDate" placeholder="Caducidad" /><br />
                                    <label htmlFor="securityCode">Código de seguridad:</label><br />
                                    <input type="number" id="securityCode" name="securityCode" placeholder="Código de seguridad" /><br />

                                    <button className="enviar_btn" type="submit">
                                        <a className="btnfos btnfos-1">
                                            <svg>
                                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                            </svg>
                                            Pagar
                                        </a>
                                    </button>
                                    <br />

                                    <button className="enviar_btn3" type="button" onClick={handleNextStep}>
                                        Seguir
                                    </button>
                                    <button className="enviar_btn" type="button" onClick={handlePreviousStep}>
                                        Volver
                                    </button>

                                </form>
                            </div>
                        </div>
                    </section>
                </div>


            )}


            {step === 4 && (
                <div className="payment_card">

                

                    <Targeta/>

                </div>


            )}






        </>
    );

}
