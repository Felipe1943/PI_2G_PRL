import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const lineData = {
  labels: ["Dez 23","Jan 24","Fev 24","Mar 24","Abr 24","Mai 24","Jun 24"],
  datasets: [
    {
      label: "Emissões (kg)",
      data: [5200, 5000, 4800, 4600, 4500, 4300, 4100],
      fill: true,
      tension: 0.3,
      borderColor: "#10B981",
      backgroundColor: "rgba(16,185,129,0.12)",
    },
    {
      label: "Meta (kg)",
      data: [4800,4800,4800,4800,4800,4800,4800],
      borderDash: [5,5],
      borderColor: "#9CA3AF",
      fill: false,
      tension: 0.1,
    },
  ],
};

const pieData = {
  labels: ["Energia","Transporte","Produção","Resíduos"],
  datasets: [
    {
      data: [45, 30, 20, 5],
      backgroundColor: ["#F59E0B", "#3B82F6", "#10B981", "#8B5CF6"],
    },
  ],
};

const barData = {
  labels: ["Energia","Transporte","Produção","Resíduos"],
  datasets: [
    { label: "Mês Anterior", data: [1600, 900, 800, 200], backgroundColor: "#9CA3AF" },
    { label: "Mês Atual", data: [1400, 700, 600, 100], backgroundColor: "#10B981" },
  ],
};

export default function Dashboard() {
  return (
    <div className="page-container">
      <h1>Dashboard de Emissão</h1>
      <p className="subtitle">Monitoramento em tempo real da sua pegada de carbono</p>

      <div className="cards-grid">
        <div className="stat-card">
          <h3>Total de Emissão:</h3>
          <p className="stat-value">3.200 kg CO2</p>
        </div>
        <div className="stat-card">
          <h3>Energia:</h3>
          <p className="stat-value">3.200 kg CO2</p>
        </div>
        <div className="stat-card">
          <h3>Transporte:</h3>
          <p className="stat-value">3.200 kg CO2</p>
        </div>
      </div>

      <div className="progress-card">
        <div className="progress-top">
          <span>Progresso de meta Mensa</span>
          <div className="muted">Meta: 20.200 kg CO2 • Atual: 15.200 kg CO2</div>
        </div>
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: "75%"}} />
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h4>Evolução mensal de Emissão</h4>
          <Line data={lineData} />
        </div>

        <div className="chart-card">
          <h4>Emissão por Fonte</h4>
          <Pie data={pieData} />
        </div>

        <div className="chart-card large">
          <h4>Comparativo por categoria</h4>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}
