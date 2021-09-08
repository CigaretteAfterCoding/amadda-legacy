import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
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
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [emptyPasswordConfirm, setEmptyPasswordConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    emailRef?.current?.focus();
  }, []);

  const isValidEmail = useMemo(() => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => {
    return password !== '' && password === passwordConfirm;
  }, [password, passwordConfirm]);

  const handleClickSubmit = useCallback(async () => {
    if (!email) {
      setEmptyEmail(true);
      emailRef?.current?.focus();
      return;
    }

    if (!isValidEmail) {
      setEmptyEmail(false);
      setEmailError(true);
      emailRef?.current?.focus();
      return;
    }

    if (!password) {
      setEmptyEmail(false);
      setEmailError(false);
      setEmptyPassword(true);
      passwordRef?.current?.focus();
      return;
    }

    if (!passwordConfirm) {
      setEmptyEmail(false);
      setEmailError(false);
      setEmptyPassword(false);
      setEmptyPasswordConfirm(true);
      passwordConfirmRef?.current?.focus();
      return;
    }

    if (!isValidPassword) {
      setEmptyEmail(false);
      setEmailError(false);
      setEmptyPassword(false);
      setEmptyPasswordConfirm(false);
      setPasswordError(true);
      setpasswordConfirm('');
      passwordConfirmRef?.current?.focus();
      return;
    }

    const data = await userAPI.signUp({ email, password });

    if (data.id) {
      history.push('/');
    }
  }, [
    isValidEmail,
    isValidPassword,
    email,
    password,
    passwordConfirm,
    history,
  ]);

  const emailErrorMessage = useMemo(() => {
    if (emptyEmail) {
      return '이메일을 입력해주세요.';
    }

    if (emailError) {
      return '이메일 형식이 유효하지 않습니다.';
    }
  }, [emptyEmail, emailError]);

  const passwordErrorMessage = useMemo(() => {
    if (emptyPassword) {
      return '비밀번호를 입력해주세요.';
    }
  }, [emptyPassword]);

  const passwordConfirmErrorMessage = useMemo(() => {
    if (emptyPasswordConfirm) {
      return '비밀번호를 다시 입력해주세요.';
    }

    if (passwordError) {
      return '비밀번호 확인이 틀렸습니다.';
    }
  }, [emptyPasswordConfirm, passwordError]);

  return (
    <Container>
      <Input
        ref={emailRef}
        type="email"
        label="Email address"
        placeholder="Email"
        value={email}
        error={emptyEmail || emailError}
        errorMessage={emailErrorMessage}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        ref={passwordRef}
        type="password"
        label="Password"
        placeholder="Password"
        value={password}
        error={emptyPassword}
        errorMessage={passwordErrorMessage}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        ref={passwordConfirmRef}
        type="password"
        label="Password Confirm"
        placeholder="Password Confirm"
        value={passwordConfirm}
        error={emptyPasswordConfirm || passwordError}
        errorMessage={passwordConfirmErrorMessage}
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
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
`;

const SignUpBtn = styled(Button)`
  margin-top: 17px;
  background-color: ${colors.amadda};
  margin-bottom: 10px;
  color: ${colors.white};
  &:hover {
    background-color: ${colors.amaddaHover};
  }
`;

const GoogleBtn = styled(Button)`
  margin-bottom: 10px;
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.gray[400]};
  }
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
  &:hover {
    background-color: ${colors.gray[400]};
  }
`;
