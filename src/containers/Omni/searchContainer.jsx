import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from '../../components/SearchComponent';

const SearchContainer = (props) => {
  const { setSearchValue } = props;
  const searchHandler = (e) => {
    setSearchValue(e);
  };
  return <SearchComponent searchHandler={searchHandler} />;
};
SearchContainer.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchContainer;
