import React from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/cartStorage';
import CartCard from '../components/CartProductCard';

class Cart extends React.Component {
  state = {
    cart: {},
  }

  componentDidMount() {
    this.setState(() => ({
      cart: getCart(),
    }));
  }

  render() {
    const { cart } = this.state;
    const cartKeys = Object.keys(cart);
    return cartKeys.length === 0 ? (
      <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</p>
    ) : (
      <div>
        { cartKeys.map((id) => (<CartCard
          { ...cart[id] }
          key={ id }
        />))}
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

export default Cart;
