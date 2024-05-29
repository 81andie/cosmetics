import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductServiceDior } from '../photoservice/ProductServiceDior';

export const Dior = () => {
    const [products, setProducts] = useState([]);
    const ds = useRef(null);
    
    useEffect(() => {
        ProductServiceDior.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round img-products1"  src={`images/${data.image}`}alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-3xl font-bold text-900">{data.name}</div>
                                <div className="text-2l">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">${data.price}</span>
                            <Button icon="pi pi-shopping-cart w-9" label="Comprar" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;

  return (
    <div className="card-shooping">
        <img src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw11f60ade/images/beauty/0-HOME/BEAUTY/2024/3-MARCH/A24_F095_LCP-CRUISE_GammeSansBoite_5550x2000.jpg" className="Dior_portada"/>
            <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        </div>
  )
}
