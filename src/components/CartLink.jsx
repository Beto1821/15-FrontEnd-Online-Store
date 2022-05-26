import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartLink extends React.Component {
  render() {
    const { cartLength } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/Cart"
      >
        Carrinho
        <p data-testid="shopping-cart-size">{cartLength}</p>
      </Link>
    );
  }
}

CartLink.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

export default CartLink;
