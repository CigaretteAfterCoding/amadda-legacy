import React from 'react';
import styled from 'styled-components';
import MuiSearchIcon from '@material-ui/icons/Search';
import colors from 'Styles/color-variables';

const Search = () => {
  return (
    <div>
      <Wrapper>
        <InputBox placeholder="Search..."></InputBox>
        <SearchIcon />
      </Wrapper>
    </div>
  );
};

export default Search;

const Wrapper = styled.div`
  border-radius: 35px;
  border: 0px;
  background-color: ${colors.gray[200]};
  height: 28px;
  width: 200px;
  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
  padding-left: 13px;
  width: 152px;
`;

const SearchIcon = styled(MuiSearchIcon)`
  cursor: pointer;
  color: ${colors.gray[500]};
  &:hover {
    transition: all ease 0.3s;
    color: ${colors.amadda};
  }
`;
