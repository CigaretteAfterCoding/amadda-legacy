/* eslint-disable react/jsx-max-props-per-line */
import React, { forwardRef } from 'react';
import colors from 'Styles/color-variables';
import styled from 'styled-components';

interface InputProps {
  type: 'email' | 'password';
  label?: string | null;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label = null, ...rests }: InputProps, ref) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <InputBoxWrapper>
          <InputBox ref={ref} {...rests} />
        </InputBoxWrapper>
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${colors.black};
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  margin-bottom: 13px;
`;

const InputBoxWrapper = styled.div``;

const InputBox = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.gray[500]};
  border-radius: 3px;
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
    box-shadow: 0 0 2px 2px #1da1fa;
    outline: none;
  }
`;
