import React from 'react'

export const Pedido = () => {
    return (
        <section className="container_pedido">
            <div className="pedido_titulo">
                <img src="/logo.jpg" className="logo_tienda1" />
                <h1>TU PEDIDO</h1> 
              
            </div>
            <hr></hr>

            <table>
  <tr>
    <td>&nbsp;PRODUCTOS</td>
   
    <td>Precio</td>
    <td>Cantidad</td>
    <td>Subtotal</td>
    <td>Total</td>
  </tr>
  
  <tr>
    <td className="producto_celda">
     
<h5>Gloss lancome</h5>
<img src="images/1957.webp" className="img_compra"/>

    </td>
    <td>16</td>
    <td>1</td>
    <td>16</td>
    <td>16</td>
  </tr>
  <tr>
    <td>Impuestos</td>
    <td>17%</td>
    <td></td>
    <td>6.36</td>
    <td>6.36</td>
    
  </tr>
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
</table>
        </section>
    )
}
