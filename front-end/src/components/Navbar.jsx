//    All imports
import React from "react";
import image from "../assets/download.jpeg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

//    Main Navbar Function Component
function Navbar() {

  //    Get State from redux
  const state = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">

      {/*       Navbar Heading Container       */}
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <img src={image} className="title-image" alt={"Navbar"}></img>
          E-Shop
        </Link>

        {/*      Navbar Collapse Button       */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*       Navbar Content       */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active px-4" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active px-4" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active px-4" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active px-4" to="contact">Contact</Link>
            </li>
          </ul>

          {/*       Navbar Cart Button        */}
          <Link className="nav-link active" to="cart">
            <Button variant="outlined" size="large" style={{ fontWeight: "bolder", color: "white", borderColor: "white"}}>
              Cart ({state.length})
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
