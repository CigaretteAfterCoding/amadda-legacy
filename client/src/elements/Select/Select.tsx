import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';

interface SelectProps {
  menus: React.ReactNode[];
}

const Select = ({ menus }: SelectProps) => {
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

export default Select;

const SelectContainer = styled.div`
  background-color: ${colors.white};
  width: 180px;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 13px 0 15px 10px;
  &:first-child {
    font-weight: bold;
    color: ${colors.amadda};

    &:hover {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: ${colors.white};
    }
  }
  &:last-child {
    /* border-top: 1px solid ${colors.gray[300]}; */
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${colors.gray[100]};
  }
`;
