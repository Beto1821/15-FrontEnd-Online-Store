import React, { Component } from 'react';

class Review extends Component {
  state = {
    reviews: [],
    email: '',
    rate: '',
    comment: '',
  };

  componentDidMount = async () => {
    const rev = JSON.parse(localStorage.getItem('reviews'));
    if (rev instanceof Array) {
      return this.setState({
        reviews: rev,
      });
    }
    this.setState({
      reviews: [],
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  };

  clickButton = async () => {
    this.setState(({ email, rate, comment, reviews }) => ({
      email: '',
      rate: '',
      comment: '',
      reviews: [
        ...reviews,
        {
          email,
          rate,
          comment,
        },
      ],
    }),
    () => {
      const { reviews } = this.state;
      localStorage.setItem('reviews', JSON.stringify(reviews));
    });
  };

  render() {
    const { email, comment, reviews } = this.state;
    return (
      <div>
        <h2>Avaliações</h2>
        <inputw
          type="text"
          placeholder="E-mail"
          data-testid="product-detail-email"
          value={ email }
          name="email"
          onChange={ this.handleChange }
        />
        <form>
          <div id="nota">
            <label htmlFor="rate" id="label-rate">
              {' '}
              Como você avalia o produto?
            </label>
            <input
              type="radio"
              name="rate"
              value="1"
              id="escolha"
              data-testid="1-rating"
              onChange={ this.handleChange }
            />
            1
            <input
              type="radio"
              name="rate"
              value="2"
              id="escolha"
              data-testid="2-rating"
              onChange={ this.handleChange }
            />
            2
            <input
              type="radio"
              name="rate"
              value="3"
              id="escolha"
              data-testid="3-rating"
              onChange={ this.handleChange }
            />
            3
            <input
              type="radio"
              name="rate"
              value="4"
              data-testid="4-rating"
              id="escolha"
              onChange={ this.handleChange }
            />
            4
            <input
              type="radio"
              name="rate"
              value="5"
              data-testid="5-rating"
              id="escolha"
              onChange={ this.handleChange }
            />
            5
          </div>

          <textarea
            data-testid="product-detail-evaluation"
            type="text"
            name="comment"
            rows="5"
            cols="25"
            value={ comment }
            onChange={ this.handleChange }
          >
            Digite aqui sobre o que achou do produto aqui:
          </textarea>
        </form>
        <button
          type="button"
          onClick={ this.clickButton }
          data-testid="submit-review-btn"
        >
          Avaliar
        </button>
        {reviews.map((item, index) => (
          <div key={ index }>
            <p>
              {item.email}
            </p>
            <p>
              {item.rate}
            </p>
            <p>
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Review;
