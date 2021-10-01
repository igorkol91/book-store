import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputHandler, input }) => (
  <input className="bookInput bg-white mx-3" onChange={inputHandler} id="input" placeholder="Book name" value={input} />
);

Input.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Input;
