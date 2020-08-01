import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top:50px;
    padding-right:5%;
    padding-left:5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PageDefault;
