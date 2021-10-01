import React from 'react';
import PropTypes from 'prop-types';

const InputButton = ({ submitBookHandler }) => (
  <button className="progressBtn py-2 px-4" onClick={submitBookHandler} type="submit">Submit</button>
);

InputButton.propTypes = {
  submitBookHandler: PropTypes.func.isRequired,
};

export default InputButton;
