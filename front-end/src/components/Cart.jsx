//    All Imports
import React from "react";
import { Divider } from "@mui/material";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import "../App.css";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../redux/actions";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

//    Main Cart Component
function Cart() {

  //  Main Redux State
  const state = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  //    Toastify Configuration
  toast.configure();

  //    Function to increment quantity of product
  const addQty = (product) => {
    dispatch(addProduct(product));
    setTotalPrice(totalPrice + product.price);
    localStorage.setItem("total", JSON.stringify(totalPrice + product.price));
    toast("Product Quantity Added", { type: "success" });
  };

  //    Function to decrement quantity of product
  const delQty = (product) => {
    dispatch(deleteProduct(product));
    setTotalPrice(totalPrice - product.price);
    localStorage.setItem("total", JSON.stringify(totalPrice - product.price));
    toast("Product Quantity Subtracted", { type: "success" });
  };

  //    Use Effect Hook to get State from Local Storage
  useEffect(() => {
    setTotalPrice(JSON.parse(localStorage.getItem("total")));
  }, []);

  return (
    <div className="cart">

       {/*       Cart Heading Container       */}
      <div className="heading cart-heading">
        <h2>Cart</h2>

        {/*       Total Products Length       */}
        <h2>Total Items: {state.length} </h2>

        {/*       Checkout Button       */}
        <Link to="/checkout" state={{ totalPrice }}>
          <Button className="checkout-button" variant="outlined" style={{ fontWeight: "bolder", color: "white", borderColor: "white",
              fontSize: 20,
              height: 50,
              backgroundColor: "#212529",
              borderRadius: 10,
            }}
          >Checkout</Button>
        </Link>
      </div>

      {/*       Divider      */}
      <Divider />

{/*       Cart All Products     */}
      <div className="cart-products">

        {/*       Check if Cart is empty or not       */}
        {state?.length === 0 ? ( <div className="cart-details"><h4>Your cart is empty </h4></div>) : (

          //  If Cart is not empty render the State
          state?.map((product) => {
            const { id, title, price, image, qty } = product;
            const totalPrice = qty * price;

            return (
              <div className="cart-product" key={id}>

                {/*       Cart Product Image       */}
                <div className="cart-product-image">
                  <img src={image} className="cart-product-img" alt={"Product"}></img>
                </div>

                {/*       Cart Product Details       */}
                <div className="cart-product-details">
                  <div className="cart-product-title">{title}</div>
                  <div className="qty">{qty} x ${price} = ${Math.round(totalPrice)}</div>

                  {/*       Cart Product Add and Subtract Buttons       */}
                  <div className="incAndDec">
                    <Button variant="outlined" style={{ fontWeight: "bolder", color: "black",borderColor: "black", fontSize: 30, height: 50}}
                      onClick={() => addQty(product)}>
                      +
                    </Button>
                    <Button variant="outlined" style={{ fontWeight: "bolder", color: "black",borderColor: "black",fontSize: 30,height: 50}}
                      onClick={() => delQty(product)}>
                      -
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/*        Footer COmponent  */}
      <Footer />
    </div>
  );
}

export default Cart;
