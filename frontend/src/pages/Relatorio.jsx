import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const areaData = {
  labels: ["Dez 23","Jan 24","Fev 24","Mar 24","Abr 24","Mai 24","Jun 24"],
  datasets: [
    {
      label: "Emissões (kg)",
      data: [5200, 5000, 4800, 4600, 4500, 4300, 4100],
      fill: true,
      backgroundColor: "rgba(34,197,94,0.12)",
      borderColor: "#22C55E",
      tension: 0.3,
    },
  ],
};

const reports = [
  { title: "Relatório Mensal - Junho 2024", size: "2.4 MB", date: "30 Jun 2024" },
  { title: "Relatório Mensal - Maio 2024", size: "2.1 MB", date: "31 Mai 2024" },
  { title: "Relatório Trimestral - Q2 2024", size: "4.8 MB", date: "30 Jun 2024" },
  { title: "Relatório Anual - 2023", size: "12.5 MB", date: "31 Dez 2023" },
];

export default function Relatorio() {
  return (
    <div className="page-container">
      <h1>Relatórios</h1>
      <p className="subtitle">Análises detalhadas e relatórios personalizados</p>

      <div className="report-chart-card">
        <Line data={areaData} />
      </div>

      <div className="report-list-card">
        <h3>Relatórios disponíveis</h3>
        <ul className="report-list">
          {reports.map((r, i) => (
            <li key={i} className="report-item">
              <div className="report-meta">
                <strong>{r.title}</strong>
                <div className="muted">{r.date} • {r.size}</div>
              </div>
              <div className="report-actions">
                <button className="btn small">PDF</button>
                <button className="btn small">Excel</button>
                <button className="btn small ghost">Baixar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="simulation-card">
        <h3>Simulação de Cenário</h3>
        <div className="sim-row">
          <input placeholder="Período" />
          <input placeholder="Meta de redução" />
          <input placeholder="Estratégia" />
        </div>
        <button className="btn primary full">Gerar simulação</button>
      </div>
    </div>
  );
}
