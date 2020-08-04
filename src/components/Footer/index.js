import React from 'react';
import styled from 'styled-components';
import { FooterBase } from './styles';

import logo from '../../assets/images/logo.png';

const Alura = styled.a`
  color: #297ae3;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    opacity: .8;
  }
`;

function Footer() {
  return (
    <FooterBase>
      <Alura href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
        <img style={{ maxWidth: '80px' }} src={logo} alt="Logo Alura" />
      </Alura>
      <p>
        Criado durante a
        {' '}
        <b>#imersãoreact</b>
        {' '}
        da
        {' '}
        <Alura href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
          Alura
        </Alura>
      </p>
    </FooterBase>
  );
}

export default Footer;
