import React, { Component } from "react";
import Header from "./components/header/header";
import Products from "./components/products/products";
import products from "./data/products.js";
export default class App extends Component {
  state = {
    productsData: products,
    count: 0,
  };

  handleClick = (num = 1) => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="container">
        <Header count={this.state.count} handleClick={this.handleClick} />
        <Products productsData={this.state.productsData} />
      </div>
    );
  }
}
