import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../about/About";
import { Home } from "../home/Home";
import MapaDiagnostico from "../mapaDiagnosticos/MapaDiagnostico";
import Pacientes from "../pacientes/Pacientes";
import "./Body.css";

export const Body = () => {
  return (
    <div className="main-content">
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/about" element={<About />} />
          <Route path="/mapa" element={<MapaDiagnostico />} />
        </Routes>
      </section>
    </div>
  );
};
