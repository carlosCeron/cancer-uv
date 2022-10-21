import React, { useEffect, useState } from 'react'
import { GMap } from "primereact/gmap";
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';
import { FaHospitalAlt, FaHome, FaUserNurse } from "react-icons/fa";
import './Mapa.css'

const MapaDiagnostico = () => {

    const [googleMapsReady, setGoogleMapsReady] = useState(false);

     useEffect(() => {
       loadGoogleMaps(() => {
         setGoogleMapsReady(true);
       });

       return () => {
         removeGoogleMaps();
       };
     }, []);

    const options = {
      center: { lat: 3.409889, lng: -76.548565 },
      zoom: 12,
    };

  return (
    <div>
      <h1>Mapa Diagnosticos | Cali</h1>
      <section>
        {googleMapsReady && (
          <div className="card">
            <GMap
              options={options}
              style={{ width: "100%", minHeight: "700px" }}
            />
          </div>
        )}
      </section>
      <section className="mapa-footer">
        <div className="mapa-footer-item">
          <FaHome color="#fb5607" size={30} />
          <p>12 Casa</p>
        </div>
        <div className="mapa-footer-item">
          <FaHospitalAlt color="#3a86ff" size={30} />
          <p>150 Hospital</p>
        </div>
        <div className="mapa-footer-item">
          <FaUserNurse color="#9b5de5" size={30} />
          <p>12 Atención medica</p>
        </div>
      </section>
    </div>
  );
}

export default MapaDiagnostico