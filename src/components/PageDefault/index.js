import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  color: var(--white);
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 94px;

  @media(max-width: 800px) {
    padding-top: 60px;
  }
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        { children }
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
