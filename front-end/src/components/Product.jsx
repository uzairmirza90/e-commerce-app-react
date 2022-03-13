//    All imports
import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Divider } from "@mui/material";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import { toast } from 'react-toastify';

//      Main Product Function COmponent
function Product() {

  //    Get Product properties from Products Component using Link Prop State
  const location = useLocation();
  const { product } = location.state;

  //    All States
  const [LSprice, setLSprice] = useState(0);
  const dispatch = useDispatch();

  //    Toastify Config
  toast.configure()

  //    FUnction to Add Product in the Cart using Redux Reducers
  const addProductToCart = (product) => {
    dispatch(addProduct(product));
    setLSprice(LSprice + product.price)
    localStorage.setItem("total", JSON.stringify(LSprice + product.price));
    toast("Product added to cart successfully!", {type: 'success'})
  };

  //    Use Effect Hook to Get Redux State from Local Storage
  useEffect(() => {
    setLSprice(JSON.parse(localStorage.getItem("total")));
  }, []);

  return (
    <>
    {/*         Products Details Heading COntainer      */}
      <div className="heading">
        <h2>Product Details</h2>
      </div>

      {/*        Divider      */}
      <Divider />

      {/*         Products Container     */}
      <div className="product">

        {/*         Products Image     */}
        <div className="product-image-container">
          <img className="product-image" src={product.image} alt={"Product"}></img>
        </div>

        {/*         Products Content     */}
        <div>
          <Card sx={{ backgroundColor: "whitesmoke" }} className="product-details">
            <CardContent>
              <Typography variant="h4" component="div">{product.title}</Typography>
              <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>{product.description}</Typography>
              <Typography sx={{ mb: 1.9 }} color="text.secondary">Category: {product.category}</Typography>
              <Typography style={{ fontSize: 28 }}>Price: ${product.price}
                <br />
                Rating: {product.rating.rate}
                <Rating name="simple-controlled" value={product.rating.rate} style={{ marginLeft: 10 }} />
              </Typography>
            </CardContent>

            {/*         Products Card Buttons      */}
            <CardActions>

              {/*         Add TO Cart Button      */}
              <Button size="large" style={{ fontWeight: "bolder" }} onClick={() => addProductToCart(product)}>
                Add To Cart
              </Button>

              {/*         GO to Cart Button      */}
              <Link to="/cart">
                <Button size="large" style={{ fontWeight: "bolder" }}>Go to Cart</Button>
              </Link>

              {/*         Go Back to Home Page Button     */}
              <Link to="/">
                <Button size="large" style={{ fontWeight: "bolder" }}> Go Back</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
