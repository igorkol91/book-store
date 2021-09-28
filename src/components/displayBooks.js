import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const DisplayBooks = ({ todos }) => {
  const dispatch = useDispatch();
  const allTodos = todos.map((element) => (
    <li key={element.id} id={element.id}>
      {element.title}
      {' '}
      <button onClick={() => dispatch(removeBook(element.id))} type="button">X</button>
    </li>
  ));
  return (
    <div>
      <h5>{allTodos}</h5>
    </div>
  );
};

DisplayBooks.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
};
export default DisplayBooks;
