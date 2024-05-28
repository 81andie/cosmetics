import React from 'react'
import { MegaMenu } from 'primereact/megamenu';


export const Navbar = () => {

    const items = [
        {
            label: 'Nuestros Productos', icon: 'pi pi-fw pi-star-fill', 
            items: [
                [
                    {
                        label: 'Marcas', 
                        items: [{ label: 'Dior' }, { label: 'Chanel' }, { label: 'Carolina Herrera' }, { label: 'Guerlain' },{ label: 'Gucci' }]
                    },
                    {
                        label: 'Perfumes', 
                        items: [{ label: 'Perfumes' }, { label: 'Agua de Colonia' }]
                    }
                ],
                [
                    {
                        label: 'Perfumes Hombre',
                        items: [{ label: 'Perfumes' }, { label: 'Agua de Colonia' }]
                    },
                    {
                        label: 'Perfumes sólidos',
                        items: [{ label: 'Hombre' }, { label: 'Mujer' }]
                    }
                ]
            ]
        },
        {
            label: 'Tratamientos Corporales y Faciales', icon: 'pi pi-fw pi-star',
            items: [
                [
                    {
                        label: 'Cremas faciales',
                        items: [{ label: 'Serums' }, { label: 'Ojos' }, { label: 'Anti-Arrugas' }, { label: 'Hidratantes' }, { label: 'Con Color' }, { label: 'BB Correct' }, { label: 'AntiManchas' }]
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
            label: 'Tu pedido', icon: 'pi pi-fw pi-shopping-cart',
            items: [
                [
                    {
                        label: 'Resumen de tu pedido',
                        items: [{ label: 'Ver' }]
                    }
                   
                ]
               
            ]
        }
    ];
   

  return (
    <div>
        <div className="card-menu">
            <MegaMenu model={items} breakpoint="960px" />
        </div>
    </div>
  )
}
