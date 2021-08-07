import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Input/Input';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../Icons/Google';
import colors from '../../styles/color-variables';

const SignUpForm = () => {
  const emailLabel = `Email address`;
  const pwLabel = `Password`;
  const pwConfirmLabel = `Password Confirm`;
  return (
    <Container>
      <Input type="email" label={emailLabel} placeholder="Email" />
      <Input type="password" label={pwLabel} placeholder="Password" />
      <Input
        type="password"
        label={pwConfirmLabel}
        placeholder="Password Confirm"
      />
      <SignUpBtn>Sign Up</SignUpBtn>
      <GoogleBtn>
        Sign Up With
        <GoogleIconWrapper>
          <GoogleIcon />
        </GoogleIconWrapper>
      </GoogleBtn>
      <FaceBookBtn>
        Sign Up With
        <FacebookIcon style={{ color: '#395185', marginLeft: '3px' }} />
      </FaceBookBtn>
    </Container>
  );
};

export default SignUpForm;

const Container = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 40px 0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
`;

const SignUpBtn = styled(Button)`
  margin-top: 5px;
  background-color: ${colors.amadda};
  margin-bottom: 10px;
  color: ${colors.white};
`;

const GoogleBtn = styled(Button)`
  margin-bottom: 10px;
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleIconWrapper = styled.div`
  margin-left: 3px;
`;

const FaceBookBtn = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
