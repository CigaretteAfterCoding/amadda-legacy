import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "../Icons/Google";

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
        <FacebookIcon style={{ color: "#395185", marginLeft: "3px" }} />
      </FaceBookBtn>
      <CreateAcoountBtn>Create new account</CreateAcoountBtn>
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const SignInBtn = styled(Button)`
  margin-top: 10px;
  background-color: #45259d;
  margin-bottom: 10px;
  color: white;
`;

const GoogleBtn = styled(Button)`
  margin-bottom: 10px;
  background-color: #fff;
  color: black;
  border: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleIconWrapper = styled.div`
  margin-left: 3px;
`;

const FaceBookBtn = styled(Button)`
  background-color: #fff;
  color: black;
  border: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const CreateAcoountBtn = styled.button`
  border: none;
  background-color: white;
  color: #4f4f4f;
  font-size: 15px;
  &:hover {
    color: black;
    text-decoration: underline;
  }
  cursor: pointer;
`;
