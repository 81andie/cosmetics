
import React from 'react'
import { useState, useEffect } from 'react';
import { ProductService } from '../photoservice/ProductService';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';


export const Prueba = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

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

    const itemTemplate = (product) => {
        return (
            <div className="col-12">
                
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round img-products" src={`images/${product.image}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <span className="font-semibold sm:align-items-start ">{product.description}</span>
                            <div className="flex align-items-left gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                   
                                    <span className="font-semibold">{product.category}</span>
                                   
                                </span>
                              
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold --primary-700">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
                
            </div>
        
        );
    };


  return (
    <div className="card-shooping">
        <div className="card-oferta">
        <h1 className="ofertasflash-title">OFERTAS FLASH</h1>
        <h3 className="ofertas-subtitle">Por sólo 24 horas, corre! No te quedes sin ellas!!</h3>
        </div>
            <DataView value={products} itemTemplate={itemTemplate} paginator rows={5} />
        </div>
  )
}
