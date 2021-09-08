import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from 'Components/Search/Search';
// import Avatar from "Components/Avatar/Avatar";
import MUIAccountCircleIcon from '@material-ui/icons/AccountCircle';
import colors from 'Styles/color-variables';
import Select from 'Elements/Select/Select';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
  const SELECT_MENU = [
    'Nickname',
    <>
      <FavoriteBorderIcon fontSize="small" style={{ marginRight: '5px' }} />
      Favorite
    </>,
    <>
      <SettingsIcon fontSize="small" style={{ marginRight: '5px' }} />
      Account Setting
    </>,
    <>
      <ExitToAppIcon fontSize="small" style={{ marginRight: '5px' }} />
      Log Out
    </>,
  ];
  const [profileMenu, setProfileMenu] = useState(false);
  const handleClickMenu = () => {
    setProfileMenu(!profileMenu);
  };

  useEffect(() => {
    const handleClickSelect = (e: React.MouseEvent<HTMLBodyElement>) => {
      if (
        !(
          (e.target as HTMLElement).closest('.select-wrapper') ||
          (e.target as HTMLElement).closest('.icon')
        )
      ) {
        setProfileMenu(false);
      }
    };
    const bodyElement = document.querySelector('body');
    bodyElement?.addEventListener('click', handleClickSelect);

    return () => bodyElement?.removeEventListener('click', handleClickSelect);
  }, []);

  return (
    <div>
      <Container>
        <HomeTitle>AMADDA</HomeTitle>
        <HeaderRight>
          <Search />
          {/* <Avatar /> */}
          <AccountCircleIcon
            className="icon"
            fontSize="inherit"
            onClick={handleClickMenu}
          />
          <SelectWrapper className="select-wrapper">
            {profileMenu && <Select menus={SELECT_MENU} />}
          </SelectWrapper>
        </HeaderRight>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
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
  user-select: none;
`;

const HeaderRight = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  width: 290px;
  justify-content: space-between;
  margin-right: 0px;
  position: absolute;
  right: 0px;
`;

const AccountCircleIcon = styled(MUIAccountCircleIcon)`
  color: ${colors.gray[400]};
  margin-right: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const SelectWrapper = styled.div`
  z-index: 9999;
  margin-top: 240px;
  position: absolute;
  right: 30px;
`;
