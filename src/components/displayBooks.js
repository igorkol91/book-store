import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookMid } from '../redux/books/books';

const DisplayBooks = ({ books }) => {
  const dispatch = useDispatch();
  const allBooks = books.map((element) => (
    <li key={element.item_id} id={element.item_id}>
      {element.category}
      :
      {element.title}
      {' '}
      <button onClick={() => dispatch(removeBookMid(element.item_id))} type="button">X</button>
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
