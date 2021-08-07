import React from "react";
import styled from "styled-components";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Abstract from "../../images/Abstract.mp4";
import Clouds from "../../images/Clouds.mp4";
import Jellyfis from "../../images/Jellyfis.mp4";
import Rain from "../../images/Rain.mp4";

const SignUpPage = () => {
  const videos = [Abstract, Clouds, Jellyfis, Rain];
  const videosNum = Math.floor(Math.random() * videos.length);
  return (
    <Container>
      <video width="100%" height="auto" autoplay="true" loop muted playsinline>
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
