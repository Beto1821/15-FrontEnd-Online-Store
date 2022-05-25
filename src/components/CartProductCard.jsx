import React from 'react';
import PropTypes from 'prop-types';
import { addToCart, removeFromCart } from '../services/cartStorage';

class Card extends React.Component {
  state = {
    amount: 1,
  }

  componentDidMount = () => {
    const { amount } = this.props;
    this.setState(() => ({
      amount,
    }));
  }

  changeAmount = (op) => {
    let { amount } = this.state;
    if (op === '+') {
      amount += 1;
    } else if (amount > 1) {
      amount -= 1;
    }
    this.setState(() => ({
      amount,
    }), op === '+' ? addToCart({ ...this.props }) : removeFromCart({ ...this.props }));
  }

  render() {
    const { amount } = this.state;
    const { title } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.changeAmount('+') }
        >
          +
        </button>
        <span data-testid="shopping-cart-product-quantity">{amount}</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.changeAmount('-') }
        >
          -
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Card;
