import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#38B2AC" />
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <img src="https://avatars.dicebear.com/api/bottts/your-custom-seed.svg" alt=""/>
    </Container>);
}

export default Card;
