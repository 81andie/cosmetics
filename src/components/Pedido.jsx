import React from 'react'
import { useEffect, useState } from 'react'
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';

export const Pedido = () => {

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities ]= useState({});

  const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  useEffect(() => {
    const cartFromLocalStorage = getCartFromLocalStorage();
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);

      const initialQuantities ={};
      cartFromLocalStorage.forEach(product=>{
        initialQuantities[product.id]= 1
      })

      setQuantities(initialQuantities);



    }
  }, []);


const handleCantidadChange =(e, productId)=>{
  const value = e.target.value;
  const cantidad = value === "" ? "" : parseInt(value);

  console.log(`Changing quantity of product ID ${productId} to ${cantidad}`);
  setQuantities({
    ...quantities,
    [productId]: cantidad

    
  });

}

let prueba = [...cart];

 let resultado= [];


function subtotalCarrito (subtotal){

  let total=0;
  let total1= 0;
  for(let i = 0; i<subtotal.length; i++){
    const product = subtotal[i];
    const quantity = quantities[product.id] || 1;

   console.log(product);
   total1= product.price * quantity;
   resultado.push(total1);

  total+= product.price * quantity;


  
  
  }
  return total;
}


subtotalCarrito(prueba);


console.log(resultado)







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

          {cart.map((product) => (

            <tr key={product.id}>
              <td className="producto_celda">

                <h5>{product.name}</h5>
                <img src={`/images/${product.image}`} className="img_compra" />

              </td>
              <td>{product.price}</td>
              <td>

                {/*<button onClick={() => updateQuantity(index, -1)}>-</button>
                {item.cantidad}*/}

<input
            type="number"
            value={quantities[product.id] !== undefined ? quantities[product.id] : 1}
            min="1"
            max="10"
            onChange={(e) => handleCantidadChange(e, product.id)}
          />
 
               

              </td>
              <td>{product.price}</td>
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
            <h2>Total:${total} </h2>
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
