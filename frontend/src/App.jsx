// frontend/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Relatorio from "./pages/Relatorio";
import Suporte from "./pages/Suporte";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <header className="site-header">
          <div className="brand">
            <img src="/src/assets/images/logo.jpeg" alt="CarbonMap" className="logo" />
            <span className="brand-name">CarbonMap</span>
          </div>

          <nav className="main-nav">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/calcular" className="nav-link">Calcular</Link>
            <Link to="/relatorio" className="nav-link">Relatório</Link>
            <Link to="/perfil" className="nav-link">Perfil</Link>
            <Link to="/suporte" className="nav-link primary">Suporte</Link>
          </nav>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/suporte" element={<Suporte />} />
            {/* rotas placeholders: se não existir, criar páginas simples */}
            <Route path="/perfil" element={<div className="page-container"><h1>Perfil</h1></div>} />
            <Route path="/calcular" element={<div className="page-container"><h1>Calcular</h1></div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
