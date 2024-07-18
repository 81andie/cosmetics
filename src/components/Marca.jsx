import React from 'react'
import './Marca.css';

import { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';
import { useParams } from 'react-router-dom';
import { Toast } from 'primereact/toast';


export const Marca = () => {
    const toast = useRef(null);

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [color, setColor] = useState([]);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');

        return savedCart ? JSON.parse(savedCart) : [];
    })

    const agregarColor = (e, productId) => {
        const selectedColor = e.target.getAttribute('data-color');
        setColor(prevState => ({ ...prevState, [productId]: selectedColor }));
        console.log(`Color seleccionado para el producto ${productId}: ${selectedColor}`);

        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === productId) {
                    return { ...item, color: selectedColor };
                }
                return item;
            });
            console.log('Carrito actualizado:', updatedCart);
            return updatedCart;
        });



    };





    const addToCart = (product) => {

        console.log("Agregando al carrito:", product);

        const isProductInCart = cart.some(item => item.id === product.id);


        if (!isProductInCart) {
            const updatedProduct = { ...product, color: color[product.id] || '' };
            const updateCart = [...cart, updatedProduct];
            console.log('Producto actualizado:', updatedProduct);

            setCart(updateCart);


            localStorage.setItem('cart', JSON.stringify(updateCart));

        }



    };

    const ds = useRef(null);



    useEffect(() => {
        ProductServiceMarca.getProducts().then(
            (data) => {

                setAllProducts(data);
                let items = data.filter(item => {

                    return item.marca === id
                })

            
                setProducts(items)
                setFilteredProducts(items);
                console.log(items)
            }
        );
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

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

    const showInfo = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Mensaje información al usuario',
            detail: 'Ha agregado su producto en el carrito',
            life: 3000
        });
    }


    const handleSearch = (event) => {
       
       
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        console.log('Búsqueda por:', term);

        // Filtrar productos basados en la búsqueda por marca
        const filteredItems = allProducts.filter(product => {
            console.log('Producto:', product); // Verificar cada producto
            if (product.name) {
                return product.name.toLowerCase().includes(term);
            }
            return false;
    });
 
    console.log('Productos filtrados:', filteredItems);
    setFilteredProducts(filteredItems); // Actualizar productos filtrados

    };




    const itemTemplate = (data) => {
        return (
            <>

                <div className="col-12">

                    <img className="marca_logo " src={`/images/${data.portada}`} alt={data.portada} />
                    <div className="flex flex-column xl:flex-row xl:align-items-start p-2 gap-5">

                        <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round img-products1" src={`/images/${data.image}`} alt={data.name} />
                        <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-3">
                            <div className="flex flex-column align-items-center lg:align-items-start gap-1">
                                <div className="flex flex-column gap-4">
                                    <div className="text-4xl font-bold  p-1 text-900 title_producto">{data.name}</div>
                                    {/* Aquí puedes agregar el selector de color */}
                                    {data.variants && (
                                        <div className="flex flex-row gap-1 p-1 color-selectors-container">
                                            {data.variants.map((variant) => (
                                                <button key={variant.id}
                                                    data-color={variant.color}
                                                    onClick={(e) => agregarColor(e, data.id)}
                                                    className={`color-selector-button bg-${variant.color.toLowerCase()}`}>{variant.color}

                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    <div className="text-2l p-2 parrafo_descripcion">{data.description}</div>


                                </div>


                                <div className="flex flex-column gap-2 mt-3.5">
                                    <Rating value={data.rating} readOnly cancel={false} ></Rating>
                                    <span className="flex align-items-center p-1 gap-2">

                                        <i className="pi pi-tag product-category-icon "></i>

                                        <span className="font-semibold">{data.category}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2 container_btncompra">
                                <Toast ref={toast} />

                                <span className="text-2xl font-semibold">€{data.price}</span>
                                <Button
                                    icon="pi pi-shopping-cart w-9"
                                    label="Comprar"
                                    disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                                    onClick={() => {
                                        addToCart(data);
                                        showInfo();

                                    }}
                                />


                                <Tag value={data.inventoryStatus} severity={getSeverity(data)} className="tags"></Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;



    return (
        <div className="card-shooping">

            <div className="p-inputgroup">
                <input type="text" placeholder="Buscar por marca..." value={searchTerm} onChange={handleSearch } className="buscador" />
                <Button icon="pi pi-search" className="p-button-secondary" />
            </div>

         {/*  <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More"/>*/}

         <DataScroller value={filteredProducts} itemTemplate={itemTemplate} rows={15} />
        
        </div>
    )

}
