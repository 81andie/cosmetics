import React from 'react'
import './Mapa.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


//iconos de Leaflet en React
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;


export const Mapa = () => {


    return (
        <>
        

          <h1 className="localizacion">Dónde estamos?</h1>
          <h2 className = "subtitulo_localizacion">Dónde esta nuestro negocio</h2>

            <div className="container_geolocalizacion">

                <div>

                    <h3>Avenida de las Acácias</h3>
                    <h3>Telf: 394849584948</h3>
                    <h3>Transporte: bus 673, 684</h3>

                </div>


                <div container="Mapa" id="mapa">
                    <MapContainer center={[40.68066738794562, -4.103453062058489]} zoom={13} style={{ height: "400px", width: "500px" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[40.68066738794562, -4.103453062058489]}>
                            <Popup>
                               Cleopatra Cosmétics
                               <img src="https://th.bing.com/th/id/OIP.yzpdG3lmkHW5l3WFq_KkAAHaE8?rs=1&pid=ImgDetMain" className="imagen-tienda"></img>
                            </Popup>
                        </Marker>
                    </MapContainer>


                </div>
            </div>
        </>
    )
}
