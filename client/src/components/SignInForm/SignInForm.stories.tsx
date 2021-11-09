import React from 'react';
import styled from '@emotion/styled';
import SignInForm from './SignInForm';

export default {
  title: 'Components/SignInForm',
  copmonents: SignInForm,
};

export const Default = () => {
  return (
    <Wrapper>
      <SignInForm />
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
