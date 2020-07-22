import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import { Main } from './style';

function Page({ children }) {
  return (
    <>
      <Header />

      <Main>
        {children}
      </Main>
      

      <Footer />
    </>
  );
}



export default Page;
