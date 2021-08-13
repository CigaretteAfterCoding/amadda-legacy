import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';

const WriteButton = () => {
  return (
    <WriteButtonContainer>
      <WriteButtonBody />
    </WriteButtonContainer>
  );
};

export default WriteButton;

const WriteButtonContainer = styled.div``;

const WriteButtonBody = styled.button`
  border: 0;
  background-color: ${colors.amadda};
  height: 2.5em;
  width: 2.5em;
  border-radius: 999px;
  font-size: 22px;
  transition: all ease 0.25s;
  &:after,
  &:before {
    content: '';
    display: block;
    background-color: ${colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    height: 1em;
    width: 0.15em;
    border-radius: 5px;
  }

  &:after {
    height: 0.15em;
    width: 1em;
    border-radius: 5px;
  }

  &:hover {
    transform: rotate(90deg);
    opacity: 0.8;
    cursor: pointer;
  }
`;
