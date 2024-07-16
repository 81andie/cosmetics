import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Ofertas } from '../components/Ofertas';
import { Marca } from '../components/Marca';
import { Pedido } from '../components/Pedido';
import { Inicio } from '../components/Inicio';

import { Footer } from '../components/Footer';
import { NuestrasMarcas } from '../components/NuestrasMarcas';
import { ErrorPage } from '../components/ErrorPage';


export const Routing = () => {
    return (

        <>
     

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/marcas" element={<NuestrasMarcas />} />
                    <Route path="/ofertas" element={<Ofertas />} />
                    <Route path="/Pedido" element={<Pedido />} />
                    <Route path="/marcas/:id" element={<Marca />} />
                    <Route path="*" element={<ErrorPage />}/>


                </Routes>


                <Footer />

           

        </>

    )
}
