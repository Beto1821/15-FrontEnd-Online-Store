import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { id } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` }>Details</Link>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Card;
