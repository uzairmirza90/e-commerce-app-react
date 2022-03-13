//   All imports
import React from "react";
import image from "../assets/ecommerce-gd190ac368_1920.jpg";
import "../App.css";
import Products from "./Products";
import Footer from "./Footer";

//   Main Home Function COmponent
function Home() {
  return (
    <>
    {/*       Home Component Main Image       */}
      <div className="image">
        <img src={image} className="home-image" alt={"Home"}></img>
      </div>

      {/*       Products Component      */}
      <Products />

      {/*       Footer COmponent       */}
      <Footer />
    </>
  );
}

export default Home;
