import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const DisplayBooks = ({ books }) => {
  const dispatch = useDispatch();
  const allBooks = books.map((element) => (
    <li key={element.id} id={element.id}>
      {element.author}
      :
      {element.title}
      {' '}
      <button onClick={() => dispatch(removeBook(element.id))} type="button">X</button>
    </li>
  ));
  return (
    <div>
      <h5>{allBooks}</h5>
    </div>
  );
};

DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
};
export default DisplayBooks;
