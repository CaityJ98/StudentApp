import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

const StripeCheckout = () => {
  const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/auth/stripe/pay", {
        token: token.id,
        amount: totalAmount
      });
    } catch (error) {
      console.log(error);
    };
  }
  const tokenHandler = (token) => {
      handleToken(100, token);
  }

  return (
      <div>

          <Stripe
            stripeKey="pk_test_51KfHu4J2aB8GXvezUren2fZHYIlVC8XgbXYd0FZsGFPNjUhlOlSIqA7eIkSozFiySMET3jx226mYVfcqfkYKjW7Z00sjGcvMUH"
            token={tokenHandler}
            />
      </div>

  );
}
export default StripeCheckout;
