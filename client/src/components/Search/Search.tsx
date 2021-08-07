import React from 'react';
import styled from 'styled-components';
import MuiSearchIcon from '@material-ui/icons/Search';
import colors from '../../styles/color-variables';

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
  border-radius: 40px;
  border: 0px;
  background-color: ${colors.gray[200]};
  height: 29px;
  width: 190px;
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
  width: 140px;
`;

const SearchIcon = styled(MuiSearchIcon)`
  cursor: pointer;
  color: ${colors.gray[500]};
  &:hover {
    color: ${colors.amadda};
  }
`;
