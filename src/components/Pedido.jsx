import React from 'react'
import { useEffect, useState } from 'react'
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';

export const Pedido = () => {

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  const IVA_RATE = 0.21; 


  const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  useEffect(() => {

    const cartFromLocalStorage = getCartFromLocalStorage();
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);

      const initialQuantities = {};
      cartFromLocalStorage.forEach(product => {
        initialQuantities[product.id] = 1
      })

      setQuantities(initialQuantities);
      calculateTotal(cartFromLocalStorage, initialQuantities);


    }
  }, []);


  const handleCantidadChange = (e, productId) => {
    const value = e.target.value;
    const cantidad = value === "" ? "" : parseInt(value);

    setQuantities(prevQuantities => {
      const newQuantities = {
        ...prevQuantities,
        [productId]: cantidad,
      };
      calculateTotal(cart, newQuantities);
      return newQuantities;
    });

  }


  const calculateTotal = (cart, quantities) => {
    let total = 0;
   
    cart.forEach(product => {
      const quantity = quantities[product.id] || 1;
      total += product.price * quantity;
     
    });
    setTotal(total);
    
  };
  
  const renderRows =  cart.map((product) => {
    const quantity = quantities[product.id] || 1;
    const subtotal = product.price * quantity;
    const iva = subtotal * IVA_RATE;
    const totalConIva = subtotal+iva;
  
    return (
      <tr key={product.id}>
        <td className="producto_celda">
          <h5>{product.name}</h5>
          <img src={`/images/${product.image}`} className="img_compra" />
        </td>
        <td>{product.price.toFixed(2)}</td>
        <td>
          <input
            type="number"
            value={quantity}
            min="1"
            max="10"
            onChange={e => handleCantidadChange(e, product.id)}
          />
        </td>
        <td>{subtotal.toFixed(2)}</td>
        <td>{iva.toFixed(2)}</td>
        <td>{totalConIva.toFixed(2)}</td>
        <td></td>
      </tr>
    );
  });

  return (
    <section className="container_pedido">
      <div className="pedido_titulo">
        <img src="/logo.jpg" className="logo_tienda1" />
        <h1>TU PEDIDO</h1>
      </div>
      <hr />

      <table>
        <thead>
          <tr>
            <td>&nbsp;PRODUCTOS</td>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Subtotal</td>
            <td>IVA</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {renderRows}
          <tr>
            <td>
              <h2>Total: {total.toFixed(2)}</h2>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );

  





 
}
