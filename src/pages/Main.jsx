import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          <p> Digite algum termo de pesquisa ou escolha uma categoria. </p>
        </div>
        <Link to="/Cart" data-testid="shopping-cart-button"> Carrinho de Compras</Link>
      </div>
    );
  }
}

export default Main;
