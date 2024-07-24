import React from 'react'
import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';





export const Navbar = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const items = [



        {
            label: t('navbar.home'), icon: 'pi pi-fw pi-star-fill',
            items: [
                [
                    {
                        label: t('navbar.home'),
                        items: [

                            {
                                label: t('navbar.aboutus'),
                                command: () => {
                                    navigate("/Inicio");
                                }

                            }, {
                                label: t('SobreNosotros.Our brands'),
                                command: () => {
                                    navigate("/marcas");
                                }
                            },

                            {
                                label: t('navbar.contact'),
                                command: () => {
                                    navigate("/contacto");
                                }
                            },



                        ]

                    },

                ],

            ]
        },

        {
            label: t('navbar.Our principal'), icon: 'pi pi-fw pi-star-fill',
            items: [
                [
                    {
                        label: t('navbar.brand'),
                        items: [

                            {
                                label: 'Dior',
                                command: () => {
                                    navigate("/marcas/dior");
                                }

                            }, {
                                label: 'Chanel',
                                command: () => {
                                    navigate("/marcas/chanel");
                                }
                            },

                            {
                                label: 'Carolina Herrera',
                                command: () => {
                                    navigate("/marcas/carolinaherrera");
                                }
                            },


                            {
                                label: 'Guerlain', command: () => {
                                    navigate("/marcas/guerlain");
                                }
                            },

                            {
                                label: 'Gucci', command: () => {
                                    navigate("/marcas/gucci");
                                }
                            }]

                    },
                    {
                        label: t('navbar.fragances'),
                        items: [{
                            label: t('navbar.fragances'), command: () => {
                                navigate("/marcas/perfumes")
                            }


                        }, {
                            label: t('navbar.eau de toilette'), command: () => {
                                navigate("/marcas/aguasdecolonia")
                            }
                        }]
                    }
                ],

            ]
        },
        {
            label: t('navbar.treatments'), icon: 'pi pi-fw pi-star',
            items: [
                [
                    {
                        label: t('navbar.creams'),
                        items: [{
                            label: t('navbar.creams'), command: () => {
                                navigate("/marcas/cremas")
                            }
                        },

                        {
                            label: t('navbar.serum'), command: () => {
                                navigate("/marcas/serums")
                            }
                        },



                        {
                            label: t('navbar.eyes'), command: () => {
                                navigate("/marcas/ojos")

                            }
                        },


                        {
                            label: t('navbar.anti-wrinkle'), command: () => {
                                navigate("/marcas/antiarrugas")
                            }
                        },


                        {
                            label: t('navbar.Moisturizers'), command: () => {
                                navigate("/marcas/hidratantes")
                            }
                        },

                        {
                            label: t('navbar.with color'), command: () => {
                                navigate("/marcas/concolor")
                            }
                        },




                        {
                            label: t('navbar.Anti-spot'), command: () => {
                                navigate("/marcas/antimanchas")
                            }
                        }]
                    },

                ],
                [
                    {
                        label: t('navbar.Sun protection'),
                        items: [

                            {
                                label: t('navbar.oils'), command: () => {
                                    navigate("marcas/aceitessolares")
                                }
                            },

                            {
                                label: t('navbar.creams'), command: () => {
                                    navigate("marcas/cremasolares")
                                }
                            },

                            {
                                label:  t('navbar.Aftesun'), command: () => {
                                    navigate("marcas/aftesun")
                                }
                            }]
                    }

                ]

            ]
        },
        {
            label:  t('navbar.Makeup'), icon: 'pi pi-fw pi-palette',
            items: [
                [
                    {
                        label: t('navbar.lipsticks'),
                        items: [

                            {
                                label: t('navbar.gloss'), command: () => {
                                    navigate("marcas/gloss");
                                }
                            },
                            {
                                label: t('navbar.lipsticks'), command: () => {
                                    navigate("marcas/barras")
                                }

                            }]
                    },
                    {
                        label: t('navbar.eyes'),
                        items: [
                            {
                                label: t('navbar.palettes'), command: () => {
                                    navigate("marcas/paletas")
                                }
                            },
                            {
                                label: t('navbar.eyeliners'), command: () => {
                                    navigate("marcas/eyeliners")
                                }
                            }]
                    }
                ],
                [
                    {
                        label: t('navbar.blushes'),
                        items: [ { label: t('navbar.blushes'), command: ()=>{
                            navigate("marcas/colorete")
                        } }]
                    },
                    
                ]
            ]
        },

        {
            label: t('navbar.flash'), icon: 'pi pi-fw pi-hourglass',
            items: [
                [
                    {
                        label: t('navbar.Sales'),
                        items: [{
                            label: t('navbar.Only'), command: () => {
                                navigate('marcas/ofertas');
                            }
                        },]
                    },

                ],

            ]
        },
        {
            label:t('navbar.Summary of your order') , icon: 'pi pi-fw pi-shopping-cart',
            items: [
                [
                    {
                        label: 'Resumen de tu pedido',
                        items: [{
                            label: t('pedido.View'), command: () => {
                                navigate('/Pedido')
                            }
                        }]
                    }

                ]

            ]
        }
    ];


    return (
        <>
            <div>
                <div className="card-menu">

                    <MegaMenu model={items} breakpoint="960px"

                    />


                </div>
            </div>
        </>
    )
}
