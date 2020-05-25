import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabaleKey = "pk_test_ke0BJ0gGOiluSqnvJzqxJ7wC00cF1ulf3O";

  const onToken = (token) => {
    console.log(token);
    alert("login successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishabaleKey}
    />
  );
};

export default StripeButton;
