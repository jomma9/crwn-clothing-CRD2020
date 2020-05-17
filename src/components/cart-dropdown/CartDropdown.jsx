import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-botton/CustomButton";

import "./cart-dropdown.scss";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}

      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
