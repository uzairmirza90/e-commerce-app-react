//      All Imports
import { Divider } from "@mui/material";
import React from "react";
import Footer from "./Footer";

//      Main About Component
function About() {
  return (
    <div className="about">

         {/*       About Heading Container       */}
      <div className="heading">
        <h2>About US</h2>
      </div>
      <Divider />

      {/*       About Details       */}
      <h6 className="about-details">
        An Online Marketplace that brings you the most popular branded
        merchandise comprising of latest and advanced level of products and
        gadgets. Our platform contains an impressive range of mobile phones,
        tablets, laptops, Women's Fashion, Men's Fashion, TV’s and DVD’s, Gaming
        Consoles and Games, Home & Living products like Home Appliances, Kitchen
        Appliances, Apparel & Clothing, Shoes & Footwear, Fashion Accessories
        and Jewellery, Beauty and Cosmetics, Baby Care, Home Decor and
        Furniture, Books, Sports Goods and much more. Trust us, when we tell you
        this we are barely scratching the surface in naming our extensive line
        of product categories.
      </h6>

       {/*       About Details       */}
      <h6 className="about-details">
        With the existence of various shopping platforms popping up online,
        providing more or less the same products at the same prices, it has
        become very difficult for consumers to actually decide upon their
        platform of choice. iShopping.pk helps you with making a better and
        informed decision. We have something more to offer than good products at
        reasonable prices and that is the service level. A lot of companies are
        in the business of selling but iShopping helps its valuable customers by
        providing a personalized level of pre sales and after sales support
        unmatched by any of our competitors.
      </h6>

       {/*       Footer Component      */}
      <Footer />
    </div>
  );
}

export default About;
