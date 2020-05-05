import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  height: 45px;
  border: 1px solid #EBEFF3;
  border-radius: 5px;
  padding-left: 30px;
  /* box-shadow: 0px 0px 5px rgba(191, 210, 226, 0.25); */
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #9FA9AD;
  }
`;
const FormGroup = styled.div`
  padding: 5px;
`;

const inputComponent = (props) => {
  const {
    className,
    name,
    inputType,
    value,
    controlFunc,
    placeholder,
    clickFunc,
    validation,
  } = props;

  return (
    <FormGroup>
      <Input
        style={{ border: (validation && !value) && '1px solid #FF767E' }}
        className={className}
        name={name}
        type={inputType}
        value={value}
        onChange={controlFunc}
        placeholder={placeholder}
        onClick={clickFunc}
      />
    </FormGroup>
  );
};

inputComponent.defaultProps = {
  placeholder: '',
  value: '',
  controlFunc: () => {},
  clickFunc: () => {},
  validation: false,
};

inputComponent.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string,
  controlFunc: PropTypes.func,
  placeholder: PropTypes.string,
  clickFunc: PropTypes.func,
  validation: PropTypes.bool,
};


export default inputComponent;
