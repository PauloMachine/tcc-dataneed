import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Dataneed</Title>
      </Top>
    </Container>
  );
}
