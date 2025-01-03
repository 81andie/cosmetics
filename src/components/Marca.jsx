import React from 'react'
import './Marca.css';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';
import { useParams } from 'react-router-dom';
import { Toast } from 'primereact/toast';


export const Marca = () => {

    const { t } = useTranslation();
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
       e.preventDefault();
        const selectedColor = e.target.getAttribute('data-color');

        if (!selectedColor) {
            console.error("No se ha seleccionado ningún color.");
            return;
        }

        setColor(prevState => {
            const currentColors = prevState[productId] || [];
            const updatedColors = currentColors.includes(selectedColor) ? currentColors : [...currentColors, selectedColor];
            console.log(`Colores actualizados para el producto ${productId}: ${updatedColors}`);
            return { ...prevState, [productId]: updatedColors };
        });


    };



    const addToCart = (product) => {
        const selectedColors = color[product.id] || [];
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        let updatedCart;

        if (existingProductIndex !== -1) {
            updatedCart = cart.map((item, index) =>
                index === existingProductIndex ? { ...item, color: selectedColors, quantity: (item.quantity || 1) + 1 } : item
            );
        } else {
            const newProduct = { ...product, color: selectedColors, quantity: 1 };
            updatedCart = [...cart, newProduct];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        if (toast.current) {
            toast.current.show({
                severity: 'info',
                summary: 'Agregado al carrito',
                detail: (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`/cosmetics/images/${product.image}`} alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        <span>{product.name} ({selectedColors.join(', ')})</span>
                    </div>
                ),
                life: 3000
            });
        } else {
            console.error('Toast ref is null');
        }

    };


    const ds = useRef(null);



    useEffect(() => {
        ProductServiceMarca.getProducts(t).then(
            (data) => {

                setAllProducts(data);
                let items = data.filter(item => {

                    return item.marca === id
                })

                setProducts(items)
                setFilteredProducts(items);

            }
        );
    }, [id, t]);

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

                    <img className="marca_logo" src={`/cosmetics/images/${data.portada}`} alt={data.portada} />
                   
                    <div className="flex flex-column md:flex-row xl:flex-row  p-1 gap-1">
                   
                        <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round img-products1" src={`/cosmetics/images/${data.image}`} alt={data.name} />
                       
                        <div className="flex flex-column lg:flex-row justify-content-evenly align-items-center xl:align-items-start lg:flex-1 gap-3">
                            <div className="flex flex-column align-items-center lg:align-items-start gap-1">
                                <div className="flex flex-column align-items-center text-center gap-2 ml-2">
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


                                <div className="flex flex-column justify-content-center gap-2 mt-3.5">
                                    <Rating value={data.rating} readOnly cancel={false} ></Rating>
                                    <span className="flex align-items-center  p-1 gap-2">

                                        <i className="pi pi-tag product-category-icon"></i>

                                        <span className="font-semibold">{data.category}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2 container_btncompra">
                               

                                <span className="text-2xl font-semibold">€{data.price}</span>
                                <Button
                                    icon="pi pi-shopping-cart w-9"
                                    label="Comprar"
                                    disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                                    onClick={() => {
                                        addToCart(data);
                                       

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

  



    return (
        <div className="card-shooping">
   <Toast ref={toast} />
            <div className="p-inputgroup">
                <input type="text" placeholder="Buscar por marca..." value={searchTerm} onChange={handleSearch} className="buscador" />
                <Button icon="pi pi-search" className="p-button-secondary" />
            </div>

            {/*  <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More"/>*/}

            <DataScroller value={filteredProducts} itemTemplate={itemTemplate} rows={15} />

        </div>
    )

}
