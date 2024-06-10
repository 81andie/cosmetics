import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

export const Pedido = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('cart');
    console.log(storedProducts);
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      console.log('Productos recuperados de localStorage:', parsedProducts);
      setProducts(parsedProducts);
    } else {
      console.log('No products found in localStorage.');
    }
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const imageBodyTemplate = (product) => {
    return <img src={`/images/${product.image}`} alt={product.name} className="w-6rem shadow-2 border-round" />;
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (product) => {
    return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
  };

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
  console.log(total)
  const IVA = total * 0.21; // Assuming 21% IVA
  const totalWithIVA = total + IVA;
  const companyAddress = "1234 Company St, City, Country";

  const footer = (
    <div>
      <div style={{ textAlign: 'right' }}>
        <strong>Total:</strong> {formatCurrency(total)}
      </div>
      <div style={{ textAlign: 'right' }}>
        <strong>IVA (21%):</strong> {formatCurrency(IVA)}
      </div>
      <div style={{ textAlign: 'right' }}>
        <strong>Total con IVA:</strong> {formatCurrency(totalWithIVA)}
      </div>
      <div style={{ textAlign: 'right' }}>
        <strong>Dirección:</strong> {companyAddress}
      </div>
    </div>
  );

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Productos</span>
      <Button icon="pi pi-refresh" rounded raised onClick={() => window.location.reload()} />
    </div>
  );

  return (
    <section className="container_pedido">
      <div className="pedido_titulo">
        <img src="/logo.jpg" className="logo_tienda1" alt="logo" />
        <h1>TU PEDIDO</h1>
      </div>
      <hr />

      <div className="card3">
        <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
          <Column field="name" header="Producto" />
          <Column header="Imagen" body={imageBodyTemplate} />
          <Column field="price" header="Precio" body={priceBodyTemplate} />
          <Column field="category" header="Categoria" />
          <Column header="Subtotal" body={(product) => formatCurrency(calculateSubtotal(product))} />
        </DataTable>
      </div>
    </section>
  );
};
