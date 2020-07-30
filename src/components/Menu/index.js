import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/imgs/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  const location = useLocation();
  if (location.pathname !== '/cadastro/canal') {
    return (
      <nav className="Menu">
        <Link to="/">
          <img src={Logo} className="Logo" alt="Aluraflix" />
        </Link>

        <Button as={Link} to="/cadastro/canal" className="ButtonLink">
          Novo Canal
        </Button>

      </nav>
    );
  }
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="Aluraflix" />
      </Link>
    </nav>
  );
}

export default Menu;
