import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard de Emissao</h1>

      <div className='mt-8 row'>
        <div className='card small'>
          <h4>Total de Emissao</h4>
          <p>3.200 kg CO2</p>
        </div>
        <div className='card small'>
          <h4>Energia</h4>
          <p>3.200 kg CO2</p>
        </div>
        <div className='card small'>
          <h4>Transporte</h4>
          <p>3.200 kg CO2</p>
        </div>
      </div>

      <div className='card mt-8'>
        <h3>Progresso da Meta</h3>
        <div style='background:#ddd;height:20px;border-radius:10px;margin-top:10px;'>
          <div style='background:#2f365f;width:75%;height:100%;border-radius:10px;'></div>
        </div>
      </div>
    </div>
  );
}
