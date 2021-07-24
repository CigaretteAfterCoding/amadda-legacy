import React from "react";
import styled from "styled-components";
import SignInForm from "../../components/SignInForm/SignInForm";

const SignInPage = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
