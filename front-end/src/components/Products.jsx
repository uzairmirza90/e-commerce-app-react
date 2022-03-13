//    All imports
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import FilterProduct from "./FilterProduct";
import { Link } from "react-router-dom";

//    Main Products Function Component
function Products() {

  //  All States
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(data);
  const [loading, setLoading] = useState(false);

  //    Function to get Products from Backend Api
  const apiCall = async () => {
    try {

      //    Loading is true to show Skeleton Effect
      setLoading(true)

      //    Get Products from server
      const getData = await fetch("http://localhost:8080/products");
      const res = await getData.json();

      //    Set Time 3 seconds to store products in state for showing skeleton effect
      setTimeout(() => {
        setData(res);
        setLoading(false);
        setNewData(res);
      }, 3000)
    } catch (e) {
      console.log(e);
    }
  };


  //    Function to Filter Products
  function filter(cat) {
    const filter = data.filter((prod) => prod.category === cat);
    setNewData(filter);
  }

  //    USe Effect Hook to Get Products when Component is initialized and loading
  useEffect(() => {
      setLoading(true);
      apiCall();
  }, []);

  return (
    <div className="products">

      {/*       Filter Component and send props       */}
      <FilterProduct filter={filter} apiCall={apiCall} />

      {/*       Products heading COntainer     */}
      <div className="heading">
        <h2>Featured Products</h2>
      </div>

      {/*      Divider      */}
      <Divider />

      {/*       if Loading is true, SHow Skeleton Effects       */}
      {loading ? (
        <div className="skeleton">
          <Skeleton variant="rectangular" width={410} height={418} animation="wave" />
          <Skeleton variant="rectangular" width={410} height={418} animation="wave" />
          <Skeleton variant="rectangular" width={410} height={418} animation="wave" />
          <Skeleton variant="rectangular" width={410} height={418} animation="wave" />
        </div>
      ) : (

        //    iF loading is false, Show Products
        <div className="all-products">
          {newData.map((product) => {
            const { id, title, price, category, image } = product;
            const { rate } = product.rating;
            return (

              //    Product Card from Material UI
              <Card sx={{ maxWidth: 360 }} key={id} className="product-card">

                {/*       Product Image       */}
                <CardMedia component="img" image={image} height="380" alt="green iguana"/>

                {/*       Product Content       */}
                <CardContent>

                  {/*       Product Category      */}
                  <Typography gutterBottom variant="h5" component="div">{title} </Typography>
                  <h6>
                    Category:
                    <span style={{ fontWeight: "normal" }}>{category}</span>
                  </h6>

                  {/*       Product Price       */}
                  <h3>${price}</h3>

                   {/*       Product Rating       */}
                  <div className="rating">
                    <span>Rating: </span>
                    <span style={{ fontWeight: "normal" }}>{rate}</span>

                     {/*       Product Rating Component to show start from material ui       */}
                    <Rating name="simple-controlled" value={rate} />
                  </div>
                </CardContent>

                 {/*       Product Cart Buttons       */}
                <CardActions className="product-buttons">

                   {/*       Buy Product Button     */}
                  <Link className="nav-link active" to={`product/${id}`} state={{ product }}>
                    <Button size="large" style={{ fontWeight: "bolder" }}>Buy Now</Button>
                  </Link>

                   {/*       Go to Cart Button       */}
                  <Link to="/cart">
                    <Button size="large" style={{ fontWeight: "bolder" }}>Go to Cart</Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
