import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchItem } from '../services/api'

class ProductDetails extends React.Component {

  componentDidMount = async () => {
    const produto = await fetchItem();
    console.log(produto); 
  }

  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <Link to="/Cart"> Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductDetails;
