import React from "react";
import styled from "styled-components";
import Search from "../../components/Search/Search";
import Avatar from "../../components/Avatar/Avatar";

const Header = () => {
  return (
    <div>
      <Container>
        <HomeTitle>AMADDA</HomeTitle>
        <HeaderRight>
          <Search />
          <Avatar />
        </HeaderRight>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  color: #45259d;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-right: 50px;
  position: absolute;
  right: 0;
`;
