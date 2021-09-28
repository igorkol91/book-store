import React from 'react';
import PropTypes from 'prop-types';

const InputButton = ({ submitTodoHandler }) => (
  <button onClick={submitTodoHandler} type="submit">Submit</button>
);

InputButton.propTypes = {
  submitTodoHandler: PropTypes.func.isRequired,
};

export default InputButton;
