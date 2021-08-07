import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Search/Search';
// import Avatar from "../../components/Avatar/Avatar";
import MUIAccountCircleIcon from '@material-ui/icons/AccountCircle';
import colors from '../../styles/color-variables';

const Header = () => {
  return (
    <div>
      <Container>
        <HomeTitle>AMADDA</HomeTitle>
        <HeaderRight>
          <Search />
          {/* <Avatar /> */}
          <AccountCircleIcon fontSize="large" />
        </HeaderRight>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  color: ${colors.amadda};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  justify-content: space-between;
  margin-right: 0px;
  position: absolute;
  right: 0;
`;

const AccountCircleIcon = styled(MUIAccountCircleIcon)`
  color: ${colors.gray[400]};
  margin-right: 30px;
`;
