import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Button from 'Elements/Button/Button';
import Input from 'Elements/Input/Input';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from 'Elements/Icons/GoogleIcon';
import colors from 'Styles/color-variables';
import userAPI from 'Apis/userAPI';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const history = useHistory();

  const isValidEmail = useMemo(() => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => {
    return password !== '' && password === passwordConfirm;
  }, [password, passwordConfirm]);

  const handleClickSubmit = useCallback(async () => {
    if (!isValidEmail) {
      alert('이메일 형식이 ㄴㄴ');
      return;
    }

    if (!isValidPassword) {
      alert('비번이 다르네');
      return;
    }

    const data = await userAPI.signUp({ email, password });

    if (data.id) {
      history.push('/');
    }
  }, [isValidEmail, isValidPassword, email, password, history]);

  return (
    <Container>
      <Input
        type="email"
        label="Email address"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        label="Password Confirm"
        placeholder="Password Confirm"
        value={passwordConfirm}
        onChange={(e) => setpasswordConfirm(e.target.value)}
      />
      <SignUpBtn onClick={handleClickSubmit}>Sign Up</SignUpBtn>
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
