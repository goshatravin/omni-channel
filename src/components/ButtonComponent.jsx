import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
width: 116px;
height: 45px;
/* background: linear-gradient(#5C79FF , #76D3FF); */
background: #266CD7;
border: none;
border-radius: 5px;
color: white;
font-size: 16px;
outline: none;
cursor: pointer;
&:hover {
  background: #548ce2;
}
`;

const buttonComponent = (props) => {
  const {
    className,
    name,
    value,
    type,
  } = props;

  return (
    <Button
      className={className}
      type={type}
      name={name}
    >
      {value}
    </Button>
  );
};

buttonComponent.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default buttonComponent;
