import React from 'react';
import colors from 'Styles/color-variables';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Container>
      <HomeTitle>AMADDA</HomeTitle>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${colors.black};
`;
