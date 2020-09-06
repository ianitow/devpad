import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';
import { Container, Body } from './style';
function Default({ children, name, icon, to }) {
  return (
    <Container>
      <Header name={name} icon={icon} to={to} />
      <Body>{children}</Body>
    </Container>
  );
}

export default Default;
