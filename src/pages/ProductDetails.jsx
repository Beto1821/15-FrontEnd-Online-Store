import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { fetchItem } from '../services/api'

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
    const { produto: { title, price, thumbnail } } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } width="200" />
        <p>
          Valor:
          {' '}
          { price }
        </p>
        <Link to="/Cart"> Carrinho</Link>
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
