import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Calcular from './pages/Calcular';
import Relatorio from './pages/Relatorio';
import Perfil from './pages/Perfil';
import Suporte from './pages/Suporte';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard' replace />} />
          <Route path="/" element={<Navigate to="/relatorio" replace />} />
          <Route path='/calcular' element={<Calcular />} />
          <Route path='/relatorio' element={<Relatorio />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/suporte' element={<Suporte />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
