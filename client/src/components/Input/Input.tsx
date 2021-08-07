import React from 'react';
import colors from '../../styles/color-variables';
import styled from 'styled-components';

const Input = ({ label = null, ...rests }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputBoxWrapper>
        <InputBox {...rests} />
      </InputBoxWrapper>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #000;
  font-weight: bold;
  font-size: 17px;
  line-height: 15px;
  margin-bottom: 13px;
`;

const InputBoxWrapper = styled.div``;

const InputBox = styled.input`
  background: #ffffff;
  border: 1px solid ${colors.gray[500]};
  border-radius: 5px;
  width: 323px;
  height: 46px;
  margin-bottom: 13px;
  padding: 0px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    font-size: 13px;
    color: ${colors.gray[800]};
  }

  &:focus {
    outline: none;
  }
`;
