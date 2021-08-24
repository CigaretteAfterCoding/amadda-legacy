import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Container>
      <Btn {...props}>{props.children}</Btn>
    </Container>
  );
};

export default Button;

const Container = styled.div``;

const Btn = styled.button`
  border: none;
  border-radius: 5px;
  width: 343px;
  height: 48px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;
