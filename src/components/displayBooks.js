import React from 'react';

import PropTypes from 'prop-types';

import Book from './book';

const DisplayBooks = ({ books }) => {
  const allBooks = books.map((element) => (
    Book(element.item_id, element.category, element.title)
  ));
  return (
    <ul className="list-unstyled p-5">
      {allBooks}
    </ul>
  );
};

DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
};
export default DisplayBooks;
