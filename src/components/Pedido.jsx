import React from 'react'
import { useEffect, useState } from 'react'
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';

export const Pedido = () => {

  const [cart, setCart] = useState([]);

  const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  useEffect(() => {
    const cartFromLocalStorage = getCartFromLocalStorage();
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);

      console.log(cart);


    }
  }, []);






  return (
    <section className="container_pedido">
      <div className="pedido_titulo">
        <img src="/logo.jpg" className="logo_tienda1" />
        <h1>TU PEDIDO</h1>

      </div>
      <hr></hr>


      <table>
        <thead>
          <tr>
            <td>&nbsp;PRODUCTOS</td>

            <td>Precio</td>
            <td>Cantidad</td>
            <td>Subtotal</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>

          {cart.map((item, index) => (

            <tr key={index}>
              <td className="producto_celda">

                <h5>{item.name}</h5>
                <img src={`/images/${item.image}`} className="img_compra" />

              </td>
              <td>16</td>
              <td>1</td>
              <td>16</td>
              <td>16</td>
            </tr>

          ))}


          <tr>
            <td>Gastos de envío</td>
            <td></td>
            <td></td>
            <td>3.36</td>
            <td>3.36</td>

          </tr>
          <tr>
            <td>
              <h3>Total</h3>
            </td>
            <td></td>
            <td></td>
            <td>15.72</td>
            <td>15.72</td>


          </tr>
        </tbody>
      </table>

    </section>
  )
}
