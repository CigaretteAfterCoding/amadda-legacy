import React from "react";
import styled from "styled-components";
import MuiSearchIcon from "@material-ui/icons/Search";

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
  background-color: #e5e1e1;
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
  color: darkgray;
  &:hover {
    color: #45259d;
  }
`;
