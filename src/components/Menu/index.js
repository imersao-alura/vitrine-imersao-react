import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../ButtonLink';
import './index.css';

import logo from '../../assets/images/logo.png';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="BattleFlix - Logo"/>
      </Link>

      <ButtonLink as={ Link } className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </ButtonLink>
    </nav>
  )
}

export default Menu;