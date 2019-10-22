import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AccountCreation from './components/AccountCreation';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>
            Welcome to NBA Career Longevity Projector
          </h2>
          <Link to='/Login'>
          <p>
            Login In Now
            <Route exact path="/login" component={Login} />
          </p>
          </Link>
          <Link to='/account'>
          <p>
            Sign Up Now  
            <PrivateRoute path = '/account' component = {AccountCreation} />
          </p>
          </Link>
        </header>
      </div>
    </Router>
  );
}

export default App;


