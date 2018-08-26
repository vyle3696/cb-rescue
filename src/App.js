import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './Header';

import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <Route exact path="/" render={ ( ) => (<h2> HomePage </h2>) } />
          <Route path="/about" component={Header}/>
          <Route path="/topics" component={Main}/>
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
