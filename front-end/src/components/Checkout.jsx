//    All imports
import { Divider } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

//  Main Checkout Function
function Checkout() {

  //    All States
  const state = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem("total")));
  const [loading, setLoading] = useState(false);

  const [product] = useState({name: "E-Shop", price: Math.round(totalPrice), description: "This is a sample"});

  //    Toastify Config
  toast.configure();

  // Function for Stripe Payment Gateway 
  async function handleToken(token) {
    const response = await axios.post("http://localhost:8080/checkout", {token, product});

    if (response.status === 200) {

      //  Toastify Notification for Payment Success
      toast("Payment Successful", { type: "success" });

      //  Remove Local storage when paymeny is successfull
      localStorage.removeItem("reduxState");
      localStorage.removeItem("total");

      // Show Loading Spinner and Redirect to Home Page after 8 Seconds
      setLoading(true);
      setTimeout(() => {
        window.location = "http://localhost:3000/products";
        setLoading(false);
      }, 8000);
    } else {

      // SHow notification when payment is failed
      toast("Failure payment", { type: "error" });
    }
    console.log(response.status);
  }

  //  Use Effect Hook to get State from Local storage
  useEffect(() => {
    setTotalPrice(JSON.parse(localStorage.getItem("total")));
  }, []);


  // Show Spinner when Loading is true
  return loading ? (
    <Box sx={{ display: "flex" }} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "inherit",marginTop: 250}}>
      <CircularProgress size={80} />
    </Box>
  ) : (

    // Show Checkout Component when Loading is false
    <div className="checkout-container">

      {/*       Checkout heading Container       */}
      <div className="heading cart-heading">
        <h2>Checkout</h2>
        <h2>Total Price: &nbsp; ${Math.round(totalPrice)}</h2>

        {/*       Checkout Stripe Payment Button        */}
        <StripeCheckout 
          stripeKey="pk_test_51KcdwcLGzlwg0551cXUgVMhQCBD4XcEwzy1QajT7yeEinjli0i1mzCE6x9VvSxkFx1wINtcbjFdBrDiT5Ct1RRiq00NJigiTYs"
          token={handleToken} amount={product.price * 100} name={product.name} billingAddress shippingAddress
        />
      </div>

      {/*       Divider       */}
      <Divider />

      {/*       Checkout Products Container       */}
      <div className="checkout">
        <div className="checkout-headings">
          <h3 className="checkout-heading">Items</h3>
          <h3 className="checkout-heading">Quantity</h3>
          <h3 className="checkout-heading">Price</h3>
        </div>

        {/*       Divider      */}
        <Divider />

        {/*       Checkout Product       */}
        <div className="checkout-items">
          <div className="checkout-item">
            {state.map((product) => {
              const { id, image, qty, price } = product;
              return (
                <div key={id}>
                  <div className="checkout-item-container">
                    <img className="checkout-item-img" src={image} alt={"Product"}></img>
                    <h3>{qty}</h3>
                    <h3>${price * qty}</h3>
                  </div>
                  <Divider />
                </div>
              );
            })}
          </div>
        </div>

        {/*       Divider       */}
        <Divider />

        {/*       Checkout Total Price       */}
        <div className="total">
          <h1>Total Price: </h1>
          <h2>$&nbsp;{Math.round(totalPrice)}</h2>
        </div>
      </div>
      )

      {/*       Footer Component       */}
      <Footer />
    </div>
  );
}

export default Checkout;
