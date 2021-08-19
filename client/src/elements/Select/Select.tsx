import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';

interface SelectProps {
  menu: string[];
}

const Select = (props: SelectProps) => {
  return (
    <SelectContainer>
      <SelectMenu>
        {props.menu?.map((menu, idx) => (
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
  height: 150px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
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
  font-size: 15px;
  line-height: 16px;
`;

const SelectMenuList = styled.li`
  padding: 15px 0 15px 13px;
  &:first-child {
    font-weight: bold;
    color: ${colors.amadda};
    border-bottom: 1px solid ${colors.gray[200]};
    &:hover {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: ${colors.white};
    }
  }
  &:hover {
    cursor: pointer;
    background-color: ${colors.gray[100]};
  }
`;
