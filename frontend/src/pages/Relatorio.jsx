import React from 'react';

export default function Relatorio() {
  return (
    <div>
      <h1>Relatorios</h1>

      <div className='card mt-8'>
        <h3>Historico de Emissoes</h3>
        <div className='huge note center'>[Grafico aqui]</div>
      </div>

      <div className='card mt-8'>
        <h3>Relatorios disponiveis</h3>
        <ul>
          <li>Relatorio Mensal - Junho 2024</li>
          <li>Relatorio Mensal - Maio 2024</li>
        </ul>
      </div>
    </div>
  );
}
