import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
// import CardIcon from "../images/credit-card.svg";
// import ProductImage from "../images/product-image.jpg";

import "./Checkout.css";

let stripePromise

const getStripe = () => {
  if (!stripePromise){
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

  }

  return stripePromise;
}
const Checkout = () => {

  const [stripeError, setStripeError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const item ={
    price: "price_1N30q0COoW9aUg7Q2jJqiJsS",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  }

  const redirectToCheckout = async () => {
    setLoading(true)
    console.log("redirect to checkout")

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions)
    console.log("stripe checkot error", error)

    if (error) setStripeError(error.message)
    setLoading(false)
  };

  if (stripeError) alert(stripeError)
  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Easiest way to send money</p>
      <p className="checkout-description">
        Donate money with a click of a button
      </p>
      <h1 className="checkout-price">Ksh 100</h1>
      {/* <img
        className="checkout-product-image"
        // src={ProductImage}
        alt="Product"
      /> */}
      <button className="checkout-button" onClick={redirectToCheckout} disabled={isLoading}>
        <div className="grey-circle">
          <div className="purple-circle">
            {/* <img className="icon"  alt="credit-card-icon" /> */}
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Donate"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
