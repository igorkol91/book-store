import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputHandler, input }) => (
  <input className="bookInput bg-white" onChange={inputHandler} id="input" placeholder="Book name" value={input} />
);

Input.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Input;
