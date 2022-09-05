import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MenuToggle from './menuToggle';

const SearchBar = styled.div`
  padding: 0 0 0 1.1em;
  margin-top: 4px;
  position: relative;
  width: 177px;
  display: flex;
  align-items: center;

  .MuiIconButton-root {
    position: absolute;
    right: -11px;
    padding: 0;
  }

  .MuiSvgIcon-root {
    width: 0.9em;
    height: 0.9em;
  }

  .MuiIconButton-label {
    background-color: darkgray;
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    border-radius: 7px;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 1em;
    height: 1em;
  }

  input {
    border-radius: 7px;
    height: 22px;
    padding-left: 7px;
    font-size: 15px;
    width: 177px;
    border: none;
  }

  input:focus {
    outline: none;
    border: 0.1px solid darkgray;
  }

  @media only screen and (max-width: 992px) {
    margin-right: 30px;
  }
`;

function Search() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q'));
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/?q=${search}`);
    }
  };
  return (
    <SearchBar>
      <input
        type="text"
        value={search}
        onKeyDown={handleSearch}
        placeholder="Search Item Name ..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <IconButton className="icon">
        <SearchIcon />
      </IconButton>
    </SearchBar>
  );
}
export default Search;
