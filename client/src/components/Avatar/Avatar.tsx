import React from 'react';
import colors from '../../styles/color-variables';
import styled from 'styled-components';

const Avatar = () => {
  return (
    <div>
      <ProfileIcon>
        <Initial>B</Initial>
      </ProfileIcon>
    </div>
  );
};

export default Avatar;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.amadda};
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Initial = styled.span`
  margin-bottom: 2px;
`;
