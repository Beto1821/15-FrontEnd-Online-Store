import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Review from '../components/Review';
import { addToCart } from '../services/cartStorage';

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
  }

  render() {
    const { produto } = this.state;
    const { title, price, thumbnail } = produto;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } width="200" />
        <p>
          Valor:
          {' '}
          { price }
        </p>
        <Link
          data-testid="shopping-cart-button"
          to="/Cart"
        >
          Carrinho
        </Link>
        <button
          type="submit"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(produto) }
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
};

export default ProductDetails;
