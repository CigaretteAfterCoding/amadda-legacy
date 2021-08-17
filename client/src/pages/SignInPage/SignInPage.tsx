import React from 'react';
import styled from 'styled-components';
import Logo from 'Layouts/Header/Logo';
import SignInForm from 'Components/SignInForm/SignInForm';
import Abstract from 'Images/Abstract.mp4';
import Clouds from 'Images/Clouds.mp4';
import Rain from 'Images/Rain.mp4';

const SignInPage = () => {
  const videos = [Abstract, Clouds, Rain];
  const videosNum = Math.floor(Math.random() * videos.length);
  return (
    <Container>
      {/* <LogoWrapper>
        <Logo />
      </LogoWrapper> */}
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={videos[videosNum]} type="video/mp4" />
      </video>
      <SignInWrapper>
        <SignInForm />
      </SignInWrapper>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
`;

const LogoWrapper = styled.div`
  /* position: absolute; */
`;

const SignInWrapper = styled.div`
  position: absolute;
`;
