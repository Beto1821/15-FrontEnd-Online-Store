import React from 'react';
import PropTypes from 'prop-types';
import Review from '../components/Review';
import { addToCart } from '../services/cartStorage';
import CartLink from '../components/CartLink';

class ProductDetails extends React.Component {
  state = {
    produto: {},
  };

  componentDidMount = async () => {
    await this.fetchItem();
  }

  fetchItem = async () => {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const produto = await response.json();
    this.setState({ produto });
    console.log(produto);
  }

  render() {
    const { produto } = this.state;
    const { title, price, thumbnail } = produto;
    const { updateCartLength } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } width="200" />
        <p>
          Valor:
          {' '}
          { price }
        </p>
        <CartLink { ...this.props } />
        <button
          type="submit"
          data-testid="product-detail-add-to-cart"
          onClick={ () => {
            addToCart(produto);
            updateCartLength();
          } }
        >
          Add to Cart
        </button>
        <Review />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updateCartLength: PropTypes.func.isRequired,
};

export default ProductDetails;
