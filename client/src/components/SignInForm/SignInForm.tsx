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

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
      alert('이메일을 입력해주세요.');
      emailRef?.current?.focus();
      return;
    }
    if (!isValidEmail) {
      alert('이메일 형식이 아닙니다.');
      emailRef?.current?.focus();
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      passwordRef?.current?.focus();
      return;
    }

    const data = await userAPI.signIn({ email, password });

    if (data.id) {
      history.push('/');
    }
  }, [isValidEmail, email, password, history]);

  return (
    <Container>
      <Input
        ref={emailRef}
        type="email"
        label="Email address"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        ref={passwordRef}
        type="password"
        label="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
