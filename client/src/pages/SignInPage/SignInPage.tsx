import React from 'react';
import styled from 'styled-components';
import Logo from 'Layouts/Header/Logo';
import SignInForm from 'Components/SignInForm/SignInForm';
import Clouds from 'Images/Clouds.mp4';
import Rain from 'Images/Rain.mp4';

const SignInPage = () => {
  const videos = [Clouds, Rain];
  const videosNum = Math.floor(Math.random() * videos.length);

  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Container>
        <video width="100%"
          height="auto"
          autoPlay
          loop
          muted
        >
          <source src={videos[videosNum]}
            type="video/mp4"
          />
        </video>
        <SignInWrapper>
          <SignInForm />
        </SignInWrapper>
      </Container>
    </>
  );
};

export default SignInPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
  background: linear-gradient(100deg, #f8f6d5, #fca2b7, #b884fd, #c9ffc2);
  background-size: 800% 800%;
  animation: AnimationName 30s ease infinite;
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 47%;
`;

const SignInWrapper = styled.div`
  position: absolute;
`;
