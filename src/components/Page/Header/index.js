import React from 'react';

import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Menu } from './style';

import logoAlura from '../../../assets/images/logo-alura.svg';
import logoImersao from '../../../assets/images/logo-imersao.svg';
import iconeImersao from '../../../assets/images/icone-imersao.svg';

const Header = () => (
  <HeaderWrapper>
    <Menu>
      <Link to="/">
        <Logo src={logoAlura} alt="Logo Alura" />
      </Link>

      <a href="https://alura.com.br/imersao-react">
        <Logo src={logoImersao} alt="Logo Imersão React" />
      </a>

      <Logo src={iconeImersao} alt="Icone de capacete de escafandro com símbolo do React no centro" />
    </Menu>
  </HeaderWrapper>
);

export default Header;
