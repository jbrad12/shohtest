import Book from "./components/Book"
import BookList from "./components/BookList"
import Header from "./components/Header"
import Search from "./components/Search"
import Saved from "./components/Saved"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/saved'>Saved Books</Link>
      </nav>

      <Switch>
      <Route path='/saved'>
        <Saved />
      </Route>
      <Route exact path='/'>
        <Search />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
