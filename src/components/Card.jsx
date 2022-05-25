import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
