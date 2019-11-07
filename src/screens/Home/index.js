import React from 'react';
import {Container, Logo, LogoContainer, WelcomeText} from './style';

const Home = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <Logo source={require('../../assets/images/logo.png')} />
        </LogoContainer>
        <WelcomeText>Welcome</WelcomeText>
      </Container>
    </>
  );
};
export default Home;
