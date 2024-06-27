import React from 'react'
import { Navbar } from './Navbar';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Header = () => {





  


 


  return (
    <>
      <div className="social_icons">

        <i className="pi pi-instagram" style={{ color: 'white' }}></i>
        <i className="pi pi-youtube" style={{ color: 'white' }}></i>
        <i className="pi pi-facebook" style={{ color: 'white' }}></i>
        <i className="pi pi-telegram" style={{ color: 'white' }}></i>
      </div>

      <Navbar />

      <header className="header">
        <img src="/logo.jpg" className="logo_tienda" />

       




      </header>

     



    </>
  )
}
