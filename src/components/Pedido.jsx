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




    }
  }, []);




  let prueba = [...cart];

  function totalCarrito(precio) {

    let suma = 0;
    for (let i = 0; i < prueba.length; i++) {
      suma += precio[i].price;

    }
    return suma;
  }



  let total = totalCarrito(prueba);
  console.log(total);
  

  function cantidadProductos (e){
  let cantidad =e.target.value;
  console.log(cantidad);

  }


  








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
                <img src={`/images/${item.image}`} className="img_compra"  />

              </td>
              <td>{item.price}</td>
              <td>

                {/*<button onClick={() => updateQuantity(index, -1)}>-</button>
                {item.cantidad}
          <button onClick={() => updateQuantity(index, 1)}>+</button>*/}
                <input type="number" id="productos" name="productos" min="1" max="10"  onChange={cantidadProductos}/>

              </td>
              <td>{item.price}</td>
              <td></td>
            </tr>

          ))}


          <tr>
            <td>Gastos de envío</td>
            <td></td>
            <td></td>
            <td>0</td>
            <td>0</td>

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
