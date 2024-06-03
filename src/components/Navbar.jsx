import React from 'react'
import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from 'react-router-dom';
import { Pedido } from './Pedido';



export const Navbar = () => {

    const navigate = useNavigate();

    const items = [



        {
            label: 'Nuestros Productos', icon: 'pi pi-fw pi-star-fill',
            items: [
                [
                    {
                        label: 'marcas ',
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
                            
                            { label: 'Carolina Herrera', 
                            command: () => {
                                navigate("/marcas/carolinaherrera");
                            } }, 


                            { label: 'Guerlain', command: () => {
                                navigate("/marcas/guerlain");
                            }  }, 
                            
                            { label: 'Gucci', command: () => {
                                navigate("/marcas/gucci");
                            }  }]

                    },
                    {
                        label: 'Perfumes',
                        items: [{ label: 'Perfumes', command: () =>{
                            navigate("/marcas/perfumes")
                        }

                        
                        }, { label: 'Agua de Colonia', command: () =>{
                            navigate("/marcas/aguasdecolonia")
                        } }]
                    }
                ],
               
            ]
        },
        {
            label: 'Tratamientos Corporales y Faciales', icon: 'pi pi-fw pi-star',
            items: [
                [
                    {
                        label: 'Cremas faciales',
                        items: [{ label: 'Cremas', command:()=>{
                            navigate("/marcas/cremas")
                        } }, 
                        
                        { label: 'Serums',  command:()=>{
                            navigate("/marcas/serums")
                        }}, { label: 'Ojos' }, { label: 'Anti-Arrugas' }, { label: 'Hidratantes' }, { label: 'Con Color' }, 
                        
                        
                        
                        { label: 'BB Correct', command:()=>{
                            navigate("/marcas/BB")
                        }}, { label: 'AntiManchas' }]
                    },
                    {
                        label: 'Cremas Corporales',
                        items: [{ label: 'Hidratantes' }, { label: 'Anticelulíticas' }]
                    },
                ],
                [
                    {
                        label: 'Cremas de protección solar',
                        items: [{ label: 'Aceites' }, { label: 'Crema' }, { label: 'Aftesun' }]
                    }

                ]

            ]
        },
        {
            label: 'Maquillaje', icon: 'pi pi-fw pi-palette',
            items: [
                [
                    {
                        label: 'Labiales',
                        items: [{ label: 'Gloss' }, { label: 'Barras' }]
                    },
                    {
                        label: 'Ojos',
                        items: [{ label: 'Paletas' }, { label: 'EyeLiners' }]
                    }
                ],
                [
                    {
                        label: 'Rubores',
                        items: [{ label: 'Gelatina' }, { label: 'Polvos' }]
                    },
                    {
                        label: 'Maquillaje',
                        items: [{ label: 'Corrector' }, { label: 'Bases' }]
                    }
                ]
            ]
        },

        {
            label: 'Ofertas Flash', icon: 'pi pi-fw pi-hourglass',
            items: [
                [
                    {
                        label: 'Ofertas',
                        items: [{
                            label: 'Sólo 24h', command: () => {
                                navigate('/Inicio');
                            }
                        },]
                    },

                ],

            ]
        },
        {
            label: 'Tu pedido', icon: 'pi pi-fw pi-shopping-cart',
            items: [
                [
                    {
                        label: 'Resumen de tu pedido',
                        items: [{ label: 'Ver', command: ()=>{
                            navigate('/Pedido')
                        } }]
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
