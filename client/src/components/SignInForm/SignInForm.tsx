import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';
import Button from 'Elements/Button/Button';
import Input from 'Elements/Input/Input';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from 'Elements/Icons/GoogleIcon';
import { Link } from 'react-router-dom';
import colors from 'Styles/color-variables';
import { useHistory } from 'react-router';
import userAPI from 'Apis/userAPI';
import { useRecoilState } from 'recoil';
import userState from 'Recoil/userState';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const [_, setUser] = useRecoilState(userState);

  useEffect(() => {
    emailRef?.current?.focus();
  }, []);

  const isValidEmail = useMemo(() => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(email);
  }, [email]);

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
      setEmptyPassword(true);
      passwordRef?.current?.focus();
      return;
    }

    const data = await userAPI.signIn({ email, password });

    if (data.id) {
      history.push('/');
      setUser(data);
      return;
    }

    emailRef?.current?.focus();
    setSignInError(true);
    setPassword('');
    setEmptyEmail(false);
    setEmailError(false);
    setEmptyPassword(false);
  }, [isValidEmail, email, password, history]);

  const emailErrorMessage = useMemo(() => {
    if (emptyEmail) {
      return '이메일을 입력해주세요.';
    }

    if (emailError) {
      return '이메일 형식이 유효하지 않습니다.';
    }

    if (signInError) {
      return '이메일이나 비밀번호가 틀렸습니다.';
    }
  }, [emptyEmail, emailError, signInError]);

  const passwordErrorMessage = useMemo(() => {
    if (emptyPassword) {
      return '비밀번호를 입력해주세요.';
    }
  }, [emptyPassword]);

  return (
    <Container>
      <Input
        ref={emailRef}
        type="email"
        label="Email address"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError || emptyEmail || signInError}
        errorMessage={emailErrorMessage}
      />
      <Input
        ref={passwordRef}
        type="password"
        label="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={emptyPassword}
        errorMessage={passwordErrorMessage}
      />
      <SignInBtn onClick={handleClickSubmit}>Sign In</SignInBtn>
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

const SignInBtn = styled(Button)`
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
