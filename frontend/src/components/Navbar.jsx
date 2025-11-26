import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.jpeg";

export default function Navbar() {
  return (
    <header className='header'>
      <div className='brand'>
        <img src={logo} alt="Logo" className="logo" />
        <div>
          <strong>CarbonMap</strong>
        </div>
      </div>

      <nav className='navlinks'>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/calcular'>Calcular</NavLink>
        <NavLink to='/relatorio'>Relatorio</NavLink>
        <NavLink to='/perfil'>Perfil</NavLink>
        <NavLink to='/suporte'>Suporte</NavLink>
      </nav>
    </header>
  );
}