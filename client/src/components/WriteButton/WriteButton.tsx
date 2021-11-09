import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const WriteButton = () => {
  return (
    <WriteButtonBody>
      <AddRoundedIcon fontSize="large" />
    </WriteButtonBody>
  );
};

export default WriteButton;

const WriteButtonBody = styled.button`
  border: 0;
  background-color: ${colors.amadda};
  height: 2.5em;
  width: 2.5em;
  border-radius: 999px;
  font-size: 22px;
  transition: all ease 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  &:hover {
    transform: rotate(90deg);
    opacity: 0.8;
    cursor: pointer;
  }
`;
