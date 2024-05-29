import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Dior } from '../components/Dior';

export const Routing = () => {
    return (
        <>
          
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path= "/dior" element={<Dior/>}/>
                </Routes>
            
        </>

    )
}
