import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/Cart" component={ Cart } />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
