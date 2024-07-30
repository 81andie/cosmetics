import React from 'react'
import { Navbar } from './Navbar';
import './Header.css';
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
      <div className="container_logo">
      <img src="/cosmetics/logo.jpg" className="logo_tienda2" alt="logo" />
    
      </div>
      
      </header>

    </>
  )
}
