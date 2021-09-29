import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import DisplayBooks from './components/displayBooks';
import Categories from './components/categories';
import Input from './components/input';
import AuthorInput from './components/authorInput';
import InputButton from './components/inputButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addBooksMid, showBooks } from './redux/books/books';

function App() {
  const store = useSelector((state) => state);
  const [input, setInput] = useState('');
  const [categoryInput, setcategoryInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBooks());
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const authorInputHandler = (e) => {
    setcategoryInput(e.target.value);
  };

  const submitBookHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: input,
      category: categoryInput,
    };

    dispatch(addBooksMid(newBook));
    setInput('');
    setcategoryInput('');
  };

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="d-flex align-items-center justify-content-between">
            <h1 className="px-5"><b>To Do List</b></h1>
            <ul className="d-flex list-unstyled mx-5">
              <li className="mx-5">
                <Link to="/">Books</Link>
              </li>
              <li className="mx-5">
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <form>
                <AuthorInput input={categoryInput} inputHandler={authorInputHandler} />
                <Input input={input} inputHandler={inputHandler} />
                <InputButton submitBookHandler={submitBookHandler} />
              </form>
              <DisplayBooks books={store.booksReducer} input={input} setInput={setInput} />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
