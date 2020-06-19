import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
`;

const ChildFlex = (props) => {
  const { className, children, direction } = props;

  return <Div className={className}>{children}</Div>;
};

ChildFlex.propTypes = {
  direction: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ChildFlex;
