import React from 'react';
import PropTypes from 'prop-types';

const AuthorInput = ({ inputHandler, input }) => (
  <input className="bookInput" onChange={inputHandler} id="input" placeholder="Author name" value={input} />
);

AuthorInput.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default AuthorInput;
