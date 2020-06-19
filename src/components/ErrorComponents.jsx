import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmptyFiled = styled.div`
  background: ${(props) => props.theme.colors.error};
  width: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px 0 15px 30px;
`;
const PText = styled.p`
  color: white;
  font-size: 14px;
`;

const errorComponent = (props) => {
  const { error, submitted } = props;
  if (submitted && error) {
    return (
      <EmptyFiled>
        <PText>{error.text || (error.stack && 'Network Error')}</PText>
      </EmptyFiled>
    );
  }
  return '';
};

errorComponent.defaultProps = {
  submitted: false,
  error: {
    error: false,
  },
};

errorComponent.propTypes = {
  submitted: PropTypes.bool,
  value: PropTypes.shape({
    error: PropTypes.bool,
    status: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default errorComponent;