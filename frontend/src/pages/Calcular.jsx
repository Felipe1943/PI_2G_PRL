import React, { useState } from 'react';

export default function Calcular() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);

  return (
    <div>
      <h1>Calculadora de Emissoes</h1>

      <div className='card mt-8'>
        <input className='input' placeholder='Consumo mensal' value={valor} onChange={e=>setValor(e.target.value)} />
        <button className='btn mt-8' onClick={()=>setResultado(true)}>Calcular</button>
      </div>

      {resultado && (
        <div className='row mt-8'>
          <div className='card small'>Energia 1.250 kg CO2</div>
          <div className='card small'>Transporte 850 kg CO2</div>
          <div className='card small'>Produção 850 kg CO2</div>
        </div>
      )}
    </div>
  );
}
