/**
 * File: OmniSearchComponent.tsx
 * -------------------------
 * Component for rendering search bar with filter buttons
 */
import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from '../theme/img/search.svg';

interface OmniSearchComponentProps {
  searchValue: string;
  setValue: (event: string) => void;
  switchBtn: (id: string, filter: string) => void;
  currentBtn: string;
}
interface IData {
  id: string;
  filter: string;
}
const InputBox = Styled.div`
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
const InputSearch = Styled.input`
-webkit-appearance: none;
  height: 45px;
  padding: 0 20px;
  outline: none;
  width: 300px;
  color: #393F47;
  padding-left: 50px;
  font-size: 16px;
  box-shadow: 0px 1px 5px #dfe1e5;
  border-radius: 10px;
  border: 1px solid #EBEFF3;
  &::placeholder {
    color: #9fa9ad;
  }
`;
const ButtonBox = Styled.div`
  display: flex;
  max-width: 200px;
  justify-content: space-around;
  margin-top: 10px;
`;
const FilterBtn = Styled.button`
  outline: none;
  box-shadow: 0px 1px 5px #DFE1E5;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  height: 30px;
  padding: 0 10px;
  background: ${(props) => (props.name === props.id && props ? '#e5ebf5' : 'white')};
`;
InputSearch.displayName = 'input'; // show real display name for InputSearch, (need it for the jest test)
FilterBtn.displayName = 'button'; // show real display name for FilterBtn, (need it for the jest test)

/**
 *
 * Return search bar with  filter buttons
 *
 * @param { searchValue } string user input value
 * @param { setValue } function set value into searchValue after change input value
 * @param { switchBtn } function set value into currentBtn after click on buttons
 * @param { currentBtn } string contains information about current button
 */
const OmniSearchComponent: React.SFC<OmniSearchComponentProps> = (props) => {
  const { searchValue, setValue, switchBtn, currentBtn } = props;

  const data: Array<IData> = [
    { id: '1', filter: 'Мои' },
    { id: '2', filter: 'Новые' },
    { id: '3', filter: 'Всякие' }
  ];
  return (
    <>
      <InputBox>
        <img src={searchIcon} alt="search" />
        <InputSearch
          value={searchValue}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Введите для поиска"
        />
      </InputBox>

      <ButtonBox>
        {data.map((item) => (
          <FilterBtn
            id={item.id}
            key={item.id}
            type="button"
            onClick={() => switchBtn(item.id, item.filter)}
            name={currentBtn}
          >
            {item.filter}
          </FilterBtn>
        ))}
      </ButtonBox>
    </>
  );
};
OmniSearchComponent.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  switchBtn: PropTypes.func.isRequired,
  currentBtn: PropTypes.string.isRequired
};

export default OmniSearchComponent;
