import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor(){
    super();

    this.state = {
      cartItems: [{
        product: "James' Awesome Business Card",
        price: 1245,
        productType: 'Business Cards'
      },
      {
        product: "Henry Letterheads Inc.",
        price: 5678,
        productType: 'Leterheads'
      },
      {
        product: "Alex Likes Stickers",
        price: 9102,
        productType: 'Stickers'
      }]
    };

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  renderRows() {
    return this.state.cartItems.map((item, i)  => {
      const newPrice = '£' + item.price/100;
      return (<tr key={i}>
        <td>{item.product}</td>
        <td>{item.productType}</td>
        <td>{newPrice}</td>
      </tr>);
    });
  }

  addItemToCart() {
    let cartItem = {
      product: "Iwan' Business Card Holder",
      price: 21302,
      productType: 'Accessories'
    }
    this.setState({cartItems: [...this.state.cartItems, cartItem]});
  }

  render() {
    return (
      <div className="Cart">
        <div className="Cart__time">Cart last updated: {this.props.time}</div>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
            {this.renderRows()}
          </tbody>
        </table>
        <button className="Cart__addToCart" onClick={this.addItemToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default Cart;
