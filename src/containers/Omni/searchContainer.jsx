import React, { useState, useEffect } from 'react';
import SearchComponent from '../../components/SearchComponent';

const SearchContainer = (props) => {
  console.log(props);
  const searchHandler = (e) => {
    console.log(e);
    props.setSearchValue(e);
  };
  return <SearchComponent searchHandler={searchHandler} />;
};

export default SearchContainer;
