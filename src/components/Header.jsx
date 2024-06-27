import React from 'react'
import { Navbar } from './Navbar';
import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductServiceMarca } from '../photoservice/ProductServiceMarca';
import { useParams } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Header = () => {
    
  const [products, setProducts ] = useState([]);

  useEffect(() =>{

   ProductServiceMarca.getProducts().then((data)=> setProducts(data));

  }, []);
 




  return (
    <>
     <div className="social_icons">
       
        <i className="pi pi-instagram" style={{ color: 'white' }}></i>
        <i className="pi pi-youtube" style={{ color: 'white' }}></i>
        <i className="pi pi-facebook" style={{ color: 'white' }}></i>
        <i className="pi pi-telegram" style={{ color: 'white' }}></i>
        </div>

<Navbar/>
  
    <header className="header">
        <img src="/logo.jpg" className="logo_tienda"/>
      
        <div className="card xl:flex xl:justify-content-right">
            <OrderList value={products} onChange={(e) => setProducts(e.value)} header="Products" filter filterBy="name"></OrderList>
        </div>
       
    
       
    </header>
    </>
  )
}
