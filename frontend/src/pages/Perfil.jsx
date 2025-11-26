import React from 'react';

export default function Perfil() {
  return (
    <div>
      <h1>Perfil da Empresa</h1>

      <div className='card mt-8'>
        <input className='input' placeholder='Nome da empresa' />
        <input className='input mt-8' placeholder='Cidade' />
        <textarea className='input mt-8' placeholder='Descriçao'></textarea>

        <button className='btn mt-8'>Salvar</button>
      </div>
    </div>
  );
}
