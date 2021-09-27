import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { DisplayBooks } from './components/displayBooks';
import { Categories } from './components/categories';
import { Input } from './components/input';
import { InputButton } from './components/inputButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const submitTodoHandler = (e) => {
    setTodos([
      ...todos, {id: uuidv4() ,name: input}
    ]);
    setInput('');
  }

  const removeTodo = (e) => {
    setTodos(todos.filter(elem => elem.id !== e.target.parentNode.id))
  }

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
              <InputButton submitTodoHandler={submitTodoHandler}/>
              <DisplayBooks removeTodo={removeTodo} todos={todos} />
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
