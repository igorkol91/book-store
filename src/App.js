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
        <div className="container-fluid px-5">
          <nav className="d-flex align-items-center">
            <h1 className="px-3"><b className="text-primary">Booksstore CMS</b></h1>
            <ul className="d-flex list-unstyled mx-3 my-1">
              <li className="mx-3">
                <Link className="text-dark text-decoration-none" to="/">Books</Link>
              </li>
              <li className="mx-3">
                <Link className="text-secondary text-decoration-none" to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <DisplayBooks books={store.booksReducer} input={input} setInput={setInput} />
              <form>
                <h2 className="categoryH6">Add new Book</h2>
                <AuthorInput input={categoryInput} inputHandler={authorInputHandler} />
                <Input input={input} inputHandler={inputHandler} />
                <InputButton submitBookHandler={submitBookHandler} />
              </form>
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
