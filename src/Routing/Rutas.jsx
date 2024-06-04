import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Ofertas} from '../components/Ofertas';
import { Marca } from '../components/Marca';
import { Pedido } from '../components/Pedido';
import {Inicio} from '../components/Inicio';

export const Routing = () => {
    return (
        <>
          
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/ofertas" element={<Ofertas />} />
                    <Route path="/Pedido" element={<Pedido />} />
                    <Route path= "/marcas/:id" element={<Marca/>}/>
                   
                   
                    
                </Routes>
            
        </>

    )
}
