import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import './Pacientes.css'

const Pacientes = () => {

    const pacientes = [
      {
        id: 1,
        nombre: "Pedro",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
      {
        id: 1,
        nombre: "Pablo",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
      {
        id: 1,
        nombre: "Marcos",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
      {
        id: 1,
        nombre: "Santiago",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
      {
        id: 1,
        nombre: "Armando",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
      {
        id: 1,
        nombre: "Alfonso",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
      {
        id: 1,
        nombre: "Felix",
        apellido: "Dominguez",
        identificacion: 2656466,
        numeroContacto: 5555565,
      },
    ];

  return (
    <div className="container-pacientes">
      <h1>Pacientes</h1>
      <section>
        <DataTable value={pacientes} stripedRows responsiveLayout="scroll">
          <Column field="id" header="Id"></Column>
          <Column field="nombre" header="Nombre" sortable></Column>
          <Column field="apellido" header="Apellido" sortable></Column>
          <Column
            field="identificacion"
            header="Identificación"
            sortable
          ></Column>
          <Column
            field="numeroContacto"
            header="Numero Contacto"
            sortable
          ></Column>
        </DataTable>
      </section>
    </div>
  );
};

export default Pacientes;
