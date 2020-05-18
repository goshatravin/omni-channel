import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => {
    return props.direction;
  }};
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
`;

const Flexbox = (props) => {
  const { className, children, direction } = props;

  return (
    <Div className={className} direction={direction}>
      {children}
    </Div>
  );
};

Flexbox.propTypes = {
  direction: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Flexbox;
