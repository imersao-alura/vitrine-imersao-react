import React from "react";

import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Menu } from "./style";

import logoAlura from '../../../assets/images/logo-alura.svg';

const Header = () => (
  <HeaderWrapper>
    <Menu>
      <Link to="/">
        <Logo src={logoAlura} alt="Logo Alura" />
      </Link>
    </Menu>
  </HeaderWrapper>
);

export default Header;
