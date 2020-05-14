import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Formbox = (props) => {
  const { className, children, onSubmit } = props;
  return (
    <Form onSubmit={onSubmit} className={className}>
      {children}
    </Form>
  );
};

Formbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
Formbox.defaultProps = {
  className: 'Form',
};
export default Formbox;
