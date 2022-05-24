import React, { Component } from 'react';
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
    this.setState({ categories: test.map((item) => item.name) });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li key={ category } data-testid="category">
              {' '}
              <p>{category}</p>
              {' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Produtos;
