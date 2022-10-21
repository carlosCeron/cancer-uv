import React from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';




export const SideBar = () => {

  let navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Historia clinica",
      icon: "pi pi-fw pi-chart-bar",
    },
    {
      label: "Pacientes",
      icon: "pi pi-fw pi-user",
      command: () => navigate("pacientes"),
    },
    {
      label: "Reportes",
      icon: "pi pi-fw pi-chart-pie",
    },
    {
      label: "Mapa Diagnosticos",
      icon: "pi pi-fw pi-map-marker",
      command: () => navigate("mapa"),
    },
    {
      label: "Configuraciones",
      icon: "pi pi-fw pi-cog",
    },
  ];


  return (
    <div className='side-bar'>
      <PanelMenu model={items} style={{width: '285px'}}/>
    </div>
  )
}