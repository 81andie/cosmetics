import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { FormPayments } from './FormPayments';
import './Pedido.css';
import { useTranslation } from 'react-i18next';



export const Pedido = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();



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



  const formatCurrency = (value) => {
    if (typeof value !== 'number' || isNaN(value)) {
      return '';
    }
    return value.toLocaleString('en-DE', { style: 'currency', currency: 'EUR' });
  };

  const imageBodyTemplate = (product) => {
    return <img src={`/images/${product.image}`} alt={product.name} className="image-products2" />;
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };


  const BodyTemplateColor = ({colors,id}) => {
  if (!Array.isArray(colors)) {
      return null;
    }

    return (
      <div>
        {colors.map((color, index) => (
          <span className="spanColor" key={`color-${id}-${index}`} style={{ display: 'block' }}>
           Color: {color}
          </span>
        ))}
      </div>
    );


  }

  const nameBodyTemplate = (product) => {

   //return <span className="spanColor">{rowData.name} </span>

   return (
    <div key={product.id}>
      <span className="span_product">{product.name}</span>
      <BodyTemplateColor colors={product.color} id={product.id} />
    </div>
  );
   
    
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

  const calculateSubtotal = (product) => {
    return product.price * (product.quantity || 1);
  };

  const total = products.reduce((sum, product) => sum + calculateSubtotal(product), 0);

  const IVA = total * 0.21; // Assuming 21% IVA
  const totalWithIVA = total + IVA;
  const companyAddress = "Avenida de las Acácias,20 Narnia";

  const handleQuantityChange = (event, product) => {
    const newQuantity = parseInt(event.target.value, 10);
    const updatedProducts = products.map((p) => (p.id === product.id ? { ...p, quantity: newQuantity } : p));
    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const eliminarProducto = (productos) => {

    const actualizarProductos = products.filter((producto) => producto.id !== productos.id );
    setProducts(actualizarProductos);
    localStorage.setItem('cart', JSON.stringify(actualizarProductos));
  }



  const footer = (
    <div>
      <div className="container_total" style={{ textAlign: 'right' }}>
        <em>{t('pedido.Total')}:</em> {formatCurrency(total)}
      </div>
      <div className="iva" style={{ textAlign: 'right' }}>
        <strong>{t('pedido.iva')}(21%):</strong> {formatCurrency(IVA)}
      </div>
      <div className="totalIva" style={{ textAlign: 'right' }}>
        <em>{t('pedido.whithIva')}</em> {formatCurrency(totalWithIVA)}
      </div>

    </div>
  );

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-1">
      <span className="text-l text-900 font-bold">{t('pedido.yourProducts')}</span>
      <Button icon="pi pi-refresh" rounded raised onClick={() => window.location.reload()} />
    </div>
  );



  return (

    <>
      <section className="container_pedido">
        <div className="pedido_titulo">
          <img src="/logo.jpg" className="logo_tienda1" alt="logo" />
          <h1>{t('pedido.YOUR ORDER')}</h1>
        </div>
        <hr />

        <div className="card3">
          <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
            <Column field="name" header={t('pedido.Product')} className="producto" body={nameBodyTemplate} />
  
            <Column header={t('pedido.Image')} body={imageBodyTemplate} />

            <Column field="price" header={t('pedido.Price')} body={priceBodyTemplate} />

            <Column
              className="cantidad"
              header={t('pedido.Quantity')}
              body={(product) => (
                <input
                  type="number"
                  value={product.quantity || 1}
                  onChange={(e) => handleQuantityChange(e, product)}
                />
              )}
            />

            <Column header={t('pedido.Subtotal')} body={(product) => formatCurrency(calculateSubtotal(product))} />
            <Column
              header={t('pedido.Trash')}
              body={(product) => (

                <Button icon="pi pi-trash" onClick={() => eliminarProducto(product)} />
              )}
            />

          </DataTable>
        </div>
      </section>

      <FormPayments />



    </>

  );
};
