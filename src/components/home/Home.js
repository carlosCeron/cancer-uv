import React from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";


export const Home = () => {
  /** Opciones Basicas  */

  let basicOptionsHistogram = {
    maintainAspectRatio: false,
    aspectRatio: 1.2,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  let basicOptionsLinear = {
    maintainAspectRatio: false,
    aspectRatio: 1.2,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  const histogramData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Gastritis",
        backgroundColor: "#42A5F5",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Sangrado uretra",
        backgroundColor: "#FFA726",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const lineChartBasic = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Quimioterapia",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.4,
      },
      {
        label: "Consulta temprana",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "#FFA726",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <div className="row">
        <Card
          title="Historias clinicas"
          style={{
            width: "25rem",
            marginBottom: "2em",
          }}
        >
          <div className="center-content">
            <p className="m-0" style={{ fontSize: 80, color: "#21E1E1" }}>
              2540
            </p>
          </div>
        </Card>

        <Card title="Medicos" style={{ width: "25rem", marginBottom: "2em" }}>
          <div className="center-content">
            <p className="m-0" style={{ fontSize: 80, color: "#7895B2" }}>
              250
            </p>
          </div>
        </Card>

        <Card title="Pacientes" style={{ width: "25rem", marginBottom: "2em" }}>
          <div className="center-content">
            <p className="m-0" style={{ fontSize: 80, color: "#F0EABE" }}>
              1600
            </p>
          </div>
        </Card>
      </div>

      <div className="row">
        <Card
          title="Dx frecuentes"
          style={{ width: "45rem", marginBottom: "2em", height: "25rem" }}
        >
          <Chart
            type="bar"
            data={histogramData}
            options={basicOptionsHistogram}
          />
        </Card>

        <Card
          title="Efectividad de procedimientos"
          style={{ width: "45rem", marginBottom: "2em", height: "25rem" }}
        >
          <Chart
            type="line"
            data={lineChartBasic}
            options={basicOptionsLinear}
          />
        </Card>
      </div>
    </div>
  );
};
