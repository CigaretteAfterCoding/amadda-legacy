import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Input/Input';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../Icons/Google';
import { Link } from 'react-router-dom';
import colors from '../../styles/color-variables';

const SignInForm = () => {
  const emailLabel = `Email address`;
  const pwLabel = `Password`;
  return (
    <Container>
      <Input type="email" label={emailLabel} placeholder="Email" />
      <Input type="password" label={pwLabel} placeholder="Password" />
      <SignInBtn>Sign In</SignInBtn>
      <GoogleBtn>
        Sign In With
        <GoogleIconWrapper>
          <GoogleIcon />
        </GoogleIconWrapper>
      </GoogleBtn>
      <FaceBookBtn>
        Sign In With
        <FacebookIcon style={{ color: '#395185', marginLeft: '3px' }} />
      </FaceBookBtn>
      <Link to="/sign-up">
        <CreateAcoountBtn>Create new account</CreateAcoountBtn>
      </Link>
    </Container>
  );
};

export default SignInForm;

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

const SignInBtn = styled(Button)`
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

const CreateAcoountBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${colors.black};
  font-weight: bold;
  font-size: 14px;
  &:hover {
    color: ${colors.black};
    text-decoration: underline;
  }
  cursor: pointer;
`;
