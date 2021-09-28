import React, { useState } from 'react';
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
import InputButton from './components/inputButton';
import 'bootstrap/dist/css/bootstrap.min.css';
// import your Action Creators
import { addBook } from './redux/books/books';

function App() {
  const store = useSelector((state) => state);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitTodoHandler = () => {
    const newBook = {
      id: uuidv4(),
      title: input,
      author: 'Igor',
    };
    dispatch(addBook(newBook));
    setInput('');
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
              <Input input={input} inputHandler={inputHandler} />
              <InputButton submitTodoHandler={submitTodoHandler} />
              <DisplayBooks todos={store.booksReducer} input={input} setInput={setInput} />
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
