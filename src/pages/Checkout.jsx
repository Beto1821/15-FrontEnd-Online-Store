import React, { Component } from 'react';
// import Cart from './Cart';

class Checkout extends Component {
    state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    handleChange = ({ target }) => {
      const { id } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [id]: value,
      });
    }

    render() {
      const { name, email, cpf, phone, cep, address } = this.state;
      return (
        <div>
          <div>
            <h1>Produtos no Carrinho: </h1>
          </div>
          <form>
            <label htmlFor="name">
              <p>Nome Completo: </p>
              <input
                type="text"
                id="name"
                data-testid="checkout-fullname"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="email">
              <p>E-mail: </p>
              <input
                type="email"
                id="email"
                data-testid="checkout-email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="cpf">
              <p>CPF: </p>
              <input
                type="text"
                id="cpf"
                data-testid="checkout-cpf"
                value={ cpf }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="phone">
              <p>Telefone: </p>
              <input
                type="text"
                id="phone"
                data-testid="checkout-phone"
                value={ phone }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="cep">
              <p>CEP: </p>
              <input
                type="text"
                id="cep"
                data-testid="checkout-cep"
                value={ cep }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="address">
              <p>Endereço: </p>
              <input
                type="text"
                id="address"
                data-testid="checkout-address"
                value={ address }
                onChange={ this.handleChange }
              />
            </label>
          </form>
        </div>
      );
    }
}

export default Checkout;
