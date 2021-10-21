import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from 'Layouts/Header/Logo';
import SignInForm from 'Components/SignInForm/SignInForm';
import Clouds from 'Images/Clouds.mp4';
import Rain from 'Images/Rain.mp4';
import Clear from 'Images/Clear.mp4';
import Snow from 'Images/Snow.mp4';
import weatherAPI from 'Apis/weatherAPI';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [weatherData, setWeatherData] = useState<0|1|2|3|null>(null);
  const videos =  [Clear, Clouds, Rain, Snow];

  useEffect(() => {
    async function getWeatherAPI() {
      const data = await weatherAPI.getWeather();
      setWeatherData(data);
    }
    getWeatherAPI();
  }, []);
  return (
    <>
      <Link to="/">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Link>
      <Container>
        {weatherData !== null &&
        <video width="100%"
          height="auto"
          autoPlay
          loop
          muted
        >
          <source src={videos[weatherData]}
            type="video/mp4"
          />
        </video>
        }
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
`;

const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 47%;
  z-index:999;
  & :hover{
    cursor:pointer;
  }
`;

const SignInWrapper = styled.div`
  position: absolute;
`;
