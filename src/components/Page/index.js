import React from 'react';
import propTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Main from './style';

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

Page.propTypes = {
  children: propTypes.node.isRequired,
};

export default Page;
