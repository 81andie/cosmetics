import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { Targeta } from './Targeta';
import { useTranslation } from 'react-i18next';
import './FormPayments.css';

export const FormPayments = () => {

const { t } = useTranslation();

    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label:t('pedido.Your Info'),
          
            command: (event) => {
                if (toast.current) {
                    toast.current.show({ severity: 'info', summary: t('pedido.Step1'), detail: event.item.label });
                }
            }
        },
        {
            label: t('pedido.yourProducts'),

            command: (event) => {
                if (toast.current) {
                    toast.current.show({ severity: 'warn', summary: t('pedido.Steps2'), detail: event.item.label });
                }
            }
        },
        {
            label: t('pedido.click'),
            command: (event) => {
                if (toast.current) {
                    toast.current.show({ severity: 'info', summary: t('pedido.Steps3'), detail: event.item.label });
                }
            }
        },
        {
            label: t('pedido.your confirmation'),
            command: (event) => {
                if (toast.current) {
                    toast.current.show({ severity: 'success', summary: t('pedido.Steps4'), detail: event.item.label });
                }
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

            <section className="steps_informacion">

                <h1 className="steps_titulo">{t('pedido.Payment')}</h1>
                <h3 className="steps_subs">{t('pedido.Sigue')}</h3>

                <div className="card4">
                    <Toast ref={toast}></Toast>
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} onClick={handlePreviousStep} />
                </div>

            </section>

            {step === 1 && (
                <div className="payment_titulo">
                    <h1>{t('pedido.Now')}</h1>
                    <section className="form_payment">
                        <img src="https://img.freepik.com/foto-gratis/blogger-alto-angulo-estudio-listo-filmar_23-2148360165.jpg" alt="Step 1" />
                        <div className="container_payment">
                           
                            <h1>{t('pedido.Please')}</h1>
                            <div className="form_container">
                                <form>
                                    <label htmlFor="fname">{t('pedido.Name')}:</label><br />
                                    <input type="text" id="fname" name="fname" placeholder={t('pedido.Names')}/><br />
                                    <label htmlFor="email">{t('pedido.Email')}</label><br />
                                    <input type="email" id="email" name="email" placeholder="Email" /><br />
                                    <label htmlFor="address">{t('pedido.Address')}</label><br />
                                    <input type="text" id="address" name="address" placeholder={t('pedido.Address')} /><br />
                                    <button className="enviar_btn" type="button" onClick={handleNextStep}>
                                        <a className="btnfos btnfos-1">
                                            <svg>
                                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                            </svg>
                                            {t('pedido.Next')}
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
                            <h1 className="steps_titulo">{t('pedido.yourProducts')}</h1>
                            <h3 className="steps_subs">{t('pedido.Step2')}</h3>
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
                        {t('pedido.back')}
                        </button>
                        <button className="enviar_btn3" type="button" onClick={handleNextStep}>
                        {t('pedido.Next')}
                        </button>
                    </section>
                </div>
            )}

            {step === 3 && (
                <div className="payment_titulo">
                    <h1> {t('pedido.Now1')}</h1>
                    <section className="form_payment">
                        <img src="https://img.freepik.com/vector-premium/tarjeta-credito-bancaria-dos-caras-anverso-reverso-tarjeta-debito-realista-detallada-sobre-fondo-blanco-diseno-plantilla-tarjeta-credito-presentacion-simbolo-pago-dinero_93083-3211.jpg" alt="fotografia targeta de credito" />
                        <div className="container_payment">
                            <h3>{t('pedido.enter')}</h3>
                            <h1>{t('pedido.Please1')}</h1>
                            <div className="form_container">
                                <form>
                                    <label htmlFor="cardNumber">{t('pedido.Numbertar')}</label><br />
                                    <input type="number" id="cardNumber" name="cardNumber" placeholder={t('pedido.Numbertar')} /><br />
                                    <label htmlFor="expiryDate">{t('pedido.Expiration')}:</label><br />
                                    <input type="date" id="expiryDate" name="expiryDate" placeholder={t('pedido.Expiration')} /><br />
                                    <label htmlFor="securityCode">{t('pedido.CodeSeg')}</label><br />
                                    <input type="number" id="securityCode" name="securityCode" placeholder={t('pedido.CodeSeg')} /><br />

                                    <button className="enviar_btn" type="submit" onClick={handleNextStep}>
                                        <a className="btnfos btnfos-1">
                                            <svg>
                                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                            </svg>
                                            {t('pedido.Pay')}
                                        </a>
                                    </button>
                                    <br />

                                    
                                    <button className="enviar_btn" type="button" onClick={handlePreviousStep}>
                                    {t('pedido.back')}
                                    </button>

                                </form>
                            </div>
                        </div>
                    </section>
                </div>


            )}


            {step === 4 && (
                <div className="payment_card">



                    <Targeta />

                </div>


            )}






        </>
    );

}
