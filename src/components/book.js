import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookMid } from '../redux/books/books';

const Book = (id, category, title) => {
  const dispatch = useDispatch();
  return (
    <li key={id} id={id} className="my-5 d-flex w-100 justify-content-between">
      <div className="d-flex flex-column">
        <h6 className="categoryH6">
          {category}
        </h6>
        <h3 className="titleH3">
          {title}
        </h3>
        <h6 className="authorH6">Igor Koloski</h6>
        <div>
          <button className="liBtn" type="button">Comments</button>
          <button className="liBtn" onClick={() => dispatch(removeBookMid(id))} type="button">Remove</button>
          <button className="liBtn" type="button">Edit</button>
        </div>
      </div>
      <div className="d-flex">
        <section className="d-flex mx-5">
          <div className="circleDiv" />
          <div className="d-flex flex-column align-self-center mx-4">
            <h2>64%</h2>
            <h6 className="categoryH6">Completed</h6>
          </div>
        </section>
        <section className="align-self-center mx-5">
          <h6 className="categoryH6">Current Chapter</h6>
          <h6>Chapter 17</h6>
          <button className="progressBtn py-2 px-4" type="button">Update Progress</button>
        </section>
      </div>
    </li>
  );
};

export default Book;
