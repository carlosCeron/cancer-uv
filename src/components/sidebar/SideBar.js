import React from 'react';
import './SideBar.css';
import { 
  FiHome,
  FiEdit,
  FiPhoneIncoming,
  FiPieChart,
  FiSettings
} from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';



const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    items:[]
  },
  {
    label: "Historia clinica",
    icon: "pi pi-fw pi-chart-bar",
    items: [
    ],
  },
  {
    label: "Pacientes",
    icon: "pi pi-fw pi-user",
    items: [
    ],
  },
  {
    label: "Reportes",
    icon: "pi pi-fw pi-chart-pie",
    items: [
    ],
  },
  {
    label: "Carga de datos",
    icon: "pi pi-fw pi-database",
    items: [],
  },
  {
    label: "Configuraciones",
    icon: "pi pi-fw pi-cog",
    items: [
      {
        label: "Crear Usuario",
        icon: "pi pi-fw pi-circle-fill",
      },
    ],
  },
];



export const SideBar = () => {


  const menuOptions = [
    {title: 'Home', icon: <FiHome />, url: 'home'},
    {title: 'About', icon: <FiEdit />, url: 'about'}
  ];

  return (
    <div className='side-bar'>
      <PanelMenu model={items} style={{width: '285px'}}/>
    </div>
  )
}