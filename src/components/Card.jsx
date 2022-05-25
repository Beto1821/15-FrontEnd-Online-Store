import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addToCart } from '../services/cartStorage';

class Card extends Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <div>
          <img src={ thumbnail } alt={ title } width="200" />
          <p data-testid="product-detail-name">
            { title }
            {' '}
            { price }
          </p>
          <Link to={ `/product/details/${id}` } data-testid="product-detail-link">
            Details
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            className="add-to-cart"
            onClick={ () => addToCart({ ...this.props }) }
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
