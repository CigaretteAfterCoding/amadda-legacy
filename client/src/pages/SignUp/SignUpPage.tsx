import React from 'react';
import styled from 'styled-components';
import SignUpForm from 'Components/SignUpForm/SignUpForm';
import Abstract from 'Images/Abstract.mp4';
import Clouds from 'Images/Clouds.mp4';
import Rain from 'Images/Rain.mp4';

const SignUpPage = () => {
  const videos = [Abstract, Clouds, Rain];
  const videosNum = Math.floor(Math.random() * videos.length);
  return (
    <Container>
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={videos[videosNum]} type="video/mp4" />
      </video>
      <SignUpWrapper>
        <SignUpForm />
      </SignUpWrapper>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
`;

const SignUpWrapper = styled.div`
  position: absolute;
`;
