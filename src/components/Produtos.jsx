import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Produtos extends Component {
  state = {
    categories: [],
  };

  componentDidMount = () => {
    this.categoriesList();
  };

  categoriesList = async () => {
    const test = await getCategories();
    this.setState({ categories: test.map((item) => item) });
  };

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        {categories.map(({ name, id }) => (
          <label key={ id } data-testid="category" htmlFor={ id }>
            <input
              type="radio"
              name="categoryId"
              id={ id }
              onClick={ handleChange }
              value={ id }
            />
            {name}
            <br />
          </label>
        ))}
      </div>
    );
  }
}

Produtos.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Produtos;
