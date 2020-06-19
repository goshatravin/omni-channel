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
  height: calc(var(--vh, 1vh) * 100);
  background: ${(props) => props.theme.colors.primary};
`;

const Flexbox = (props) => {
  const { className, children, direction } = props;

  return (
    // <Wrapper>
    <Div className={className} direction={direction}>
      {children}
    </Div>
    // </Wrapper>
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
