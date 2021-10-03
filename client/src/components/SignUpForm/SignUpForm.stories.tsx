import React from 'react';
import styled from '@emotion/styled';
import SignUpForm from './SignUpForm';

export default {
  title: 'Components/SignUpForm',
  copmonents: SignUpForm,
};

export const Default = () => {
  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  min-height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
