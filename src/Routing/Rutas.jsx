import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Marca } from '../components/Marca';
import { Pedido } from '../components/Pedido';
import { Inicio } from '../components/Inicio';

import { Footer } from '../components/Footer';
import { NuestrasMarcas } from '../components/NuestrasMarcas';
import { ErrorPage } from '../components/ErrorPage';
import { Contacto } from '../components/Contacto';
import { Header } from '../components/Header';


export const Routing = () => {
    return (

        <>

        <BrowserRouter basename='/cosmetics'>
            <Header/>
                <Routes>
                   
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/marcas" element={<NuestrasMarcas />} />
                  
                    <Route path="/Pedido" element={<Pedido />} />
                    <Route path="/marcas/:id" element={<Marca />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<ErrorPage />}/>

                </Routes>
                <Footer />

                </BrowserRouter>
        </>

    )
}
