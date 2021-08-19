import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';

interface SelectProps {
  menu: String[];
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
  width: 110px;
  height: 128px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
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
  text-align: center;
`;

const SelectMenuList = styled.li`
  padding-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
