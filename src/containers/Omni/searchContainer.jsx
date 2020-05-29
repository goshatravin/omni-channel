import React from 'react';
import SearchComponent from '../../components/SearchComponent';

const SearchContainer = (props) => {
  const { setSearchValue } = props;
  const searchHandler = (e) => {
    setSearchValue(e);
  };
  return <SearchComponent searchHandler={searchHandler} />;
};

export default SearchContainer;
