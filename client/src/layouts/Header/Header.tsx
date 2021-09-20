import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from 'Components/Search/Search';
// import Avatar from "Components/Avatar/Avatar";
import colors from 'Styles/color-variables';
import Select from 'Elements/Select/Select';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userState from 'Recoil/userState';
import userAPI from 'Apis/userAPI';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const handleClickSignOut = () => {
    userAPI.signOut();
    setUser(null);
  };

  const handleClickMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const selectMenus = [
    <>
      <PersonIcon fontSize="small"
        style={{ marginRight: '5px' }}
      />
      {user?.nickname}
    </>,
    <>
      <FavoriteBorderIcon fontSize="small"
        style={{ marginRight: '5px' }}
      />
      Favorite
    </>,
    <>
      <SettingsIcon fontSize="small"
        style={{ marginRight: '5px' }}
      />
      Account Setting
    </>,
    <div onClick={handleClickSignOut}
      key="3"
    >
      <ExitToAppIcon fontSize="small"
        style={{ marginRight: '5px' }}
      />
      Log Out
    </div>,
  ];

  useEffect(() => {
    const handleClickSelect = (e: MouseEvent) => {
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
          {!user ? (
            <Link to="/sign-in">
              <SignInBtn>
                로그인
              </SignInBtn>
            </Link>
          ) : (
            <>
              <ProfileImage
                className="icon"
                src={user.profile_image}
                onClick={handleClickMenu}
              />
              <SelectWrapper className="select-wrapper">
                {profileMenu && <Select menus={selectMenus} />}
              </SelectWrapper>
            </>
          )
          }
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

const SignInBtn = styled.button`
  background-color: ${colors.white};
  border:1px solid ${colors.white};
  width:70px;
  height:30px;
  color:${colors.amadda};
  font-weight:bold;
  font-size:15px;
  font-family: Roboto;
  margin-right: 10px;
  margin-bottom:20px;
  &:hover{
    cursor:pointer;
  }
`;

const ProfileImage = styled.img`
  width: 29px;
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
