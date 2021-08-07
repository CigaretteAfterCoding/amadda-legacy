import React from "react";
import styled from "styled-components";
import Logo from "../../layouts/Header/Logo";
import SignInForm from "../../components/SignInForm/SignInForm";
import Abstract from "../../images/Abstract.mp4";
import Clouds from "../../images/Clouds.mp4";
import Jellyfis from "../../images/Jellyfis.mp4";
import Rain from "../../images/Rain.mp4";

const SignInPage = () => {
  const videos = [Abstract, Clouds, Jellyfis, Rain];
  const videosNum = Math.floor(Math.random() * videos.length);
  return (
    <Container>
      {/* <LogoWrapper>
        <Logo />
      </LogoWrapper> */}
      <video width="100%" height="auto" autoplay="true" loop muted playsinline>
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
