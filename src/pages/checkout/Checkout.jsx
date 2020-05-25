import React from "react";
import { connect } from "react-redux";
// import { createSelectorCreator } from "reselect";
// import {
//   selectCartItems,
//   selectCartTotatl,
// } from "../../redux/cart/cart.selectors.js";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.scss";
import StripeButton from "../../components/stripe-button/StripeButton.jsx";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  total: state.cart.cartItems.reduce(
    (accumatedQty, cartItem) =>
      accumatedQty + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps)(Checkout);
