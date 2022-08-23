import React, { Component } from "react";
import Header from "./components/header/header";
import Products from "./components/products/products";
import products from "./data/products.js";
export default class App extends Component {
  state = {
    productsData: products,
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Products productsData={this.state.productsData} />
      </div>
    );
  }
}
