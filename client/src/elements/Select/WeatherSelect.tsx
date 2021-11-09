import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';

interface SelectProps {
  menus: React.ReactNode[];
}

const WeatherSelect = ({ menus }: SelectProps) => {
  return (
    <SelectContainer>
      <SelectMenu>
        {menus?.map((menu, idx) => (
          <SelectMenuList key={idx}>{menu}</SelectMenuList>
        ))}
      </SelectMenu>
    </SelectContainer>
  );
};

export default WeatherSelect;

const SelectContainer = styled.div`
  background-color: ${colors.white};
  width: 50px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  user-select: none;
  animation: move 0.3s;
  @keyframes move {
    0% {
      transform: translateY(-5px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const SelectMenu = styled.ul`
  font-size: 13px;
  line-height: 15px;
`;

const SelectMenuList = styled.li`
  color: ${colors.gray[600]};
  padding: 7px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  & .sunny:hover {
    color: ${colors.orange};
  }
  & .cloudy:hover {
    color: ${colors.skyblue};
  }
  & .rainy:hover {
    color: ${colors.gray[900]};
  }
  & .snowy:hover {
    color: ${colors.blue};
  }
`;
