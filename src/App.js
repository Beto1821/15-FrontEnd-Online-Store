import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import { getCart } from './services/cartStorage';

class App extends Component {
  state = {
    cartLength: 0,
  }

  componentDidMount = () => {
    this.updateLength();
  }

  updateLength = () => {
    this.setState(() => ({
      cartLength: Object.values(getCart()).reduce(
        (prev, { amount }) => (prev + amount), 0,
      ),
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Main
                { ...props }
                updateCartLength={ this.updateLength }
                { ...this.state }
              />
            ) }
          />
          <Route
            path="/Cart"
            component={ Cart }
          />
          <Route
            path="/product/details/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                updateCartLength={ this.updateLength }
                { ...this.state }
              />
            ) }
          />
          <Route
            path="/checkout"
            component={ Checkout }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
