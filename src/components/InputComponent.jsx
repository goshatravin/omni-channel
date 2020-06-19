import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
-webkit-appearance: none;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
    return '300px';
  }};
  backface-visibility: hidden;
  perspective: 1000px;
  height: 45px;
  box-shadow: 0px 1px 5px #dfe1e5;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => {
    if (props.error || (props.validation && props.value === '')) {
      return props.theme.colors.error;
    }
    return props.theme.colors.input_border;
  }};

}}
}};
  border-radius: 5px;
  background: transparent;
  padding-left: 30px;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.input_placeholder};
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
    error,
    width,
  } = props;

  return (
    <FormGroup>
      <Input
        // style={{ border: validation && !value && '1px solid #FF767E' }}
        className={className}
        name={name}
        type={inputType}
        value={value}
        onChange={controlFunc}
        placeholder={placeholder}
        onClick={clickFunc}
        error={error}
        width={width}
        validation={validation}
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
