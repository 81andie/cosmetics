import React from 'react'
import { Navbar } from './Navbar';
import { useState, useEffect } from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Header = () => {
    




  return (
    <>
     <div className="social_icons">
       
        <i className="pi pi-instagram" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-youtube" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-facebook" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-telegram" style={{ color: 'slateblue' }}></i>
        </div>

<Navbar/>
  
    <header className="header">
        <img src="/logo.jpg" className="logo"/>
      
        
       
    
       
    </header>
    </>
  )
}
