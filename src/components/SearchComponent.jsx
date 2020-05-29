import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from '../theme/img/search.svg';

const SearchInput = styled.input`
  position: relative;
  width: 333px;
  backface-visibility: hidden;
  perspective: 1000px;
  height: 45px;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.input_border};
  border-radius: 5px;
  padding-left: 3.5rem;
  padding-right: 1rem;
  /* box-shadow: 0px 1px 5px #dfe1e5; */
  background: white;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.input_placeholder};
  }
`;
const Wrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    z-index: 9;
    width: 16px;
    height: 16px;
  }
`;
const SearchComponent = (props) => {
  const { placeholder, searchHandler } = props;
  return (
    <Wrapper>
      <img src={searchIcon} alt="search" />
      <SearchInput
        type="search"
        placeholder={placeholder}
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
      />
    </Wrapper>
  );
};

SearchComponent.propTypes = {
  placeholder: PropTypes.string,
  searchHandler: PropTypes.func.isRequired,
};
SearchComponent.defaultProps = {
  placeholder: 'Введите для поиска',
};

export default SearchComponent;
