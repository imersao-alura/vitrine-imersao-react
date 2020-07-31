import React from 'react';
import styled from 'styled-components';

const ArrowIcon = styled.svg`
max-width: 100%;
height: auto;
  path {
    fill: inherit;
  }
`;

export default () => (
  <ArrowIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0" y="0" xmlSpace="preserve" width="512" height="512">
    <path d="M496.128 220.361l-160-144.032c-19.712-17.728-50.08-16.192-67.808 3.584-17.728 19.68-16.128 50.048 3.584 67.776l66.976 60.32H48c-26.528 0-48 21.472-48 48s21.472 48 48 48h290.944l-67.072 60.32c-19.712 17.76-21.312 48.096-3.584 67.776A48.006 48.006 0 00304 448.009c11.456 0 22.944-4.064 32.096-12.32l160-143.968A48.014 48.014 0 00512 256.041a48.1 48.1 0 00-15.872-35.68z" data-original="#000000" className="active-path" fill="#FFF" />
  </ArrowIcon>
);
