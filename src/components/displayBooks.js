import React from 'react';
import PropTypes from 'prop-types';

const DisplayBooks = ({ todos, removeTodo }) => {
  const allTodos = todos.map((element) => (
    <li key={element.id} id={element.id}>
      {element.name}
      {' '}
      <button onClick={removeTodo} type="button">X</button>
    </li>
  ));
  return (
    <div>
      <h5>{allTodos}</h5>
    </div>
  );
};

DisplayBooks.propTypes = {
  todos: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
export default DisplayBooks;
