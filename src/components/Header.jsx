import React from 'react'
import { Navbar } from './Navbar';
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../photoservice/Photoservice';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Header = () => {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '400px',
            numVisible: 3
        },
        {
            breakpoint: '400px',
            numVisible: 3
        },
        {
            breakpoint: '400px',
            numVisible: 2
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }




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
        <img src="./logo.jpg" className="logo"/>
      
        
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={3} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    
       
    </header>
    </>
  )
}
