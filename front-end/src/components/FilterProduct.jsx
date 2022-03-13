//    All imports
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../App.css";

//    Main Filter Product Function Component
function FilterProduct(props) {
  return (

    //  Filter Buttons Container 
    <div className="filtering">
      <ButtonGroup variant="outlined" aria-label="outlined primary button group" size="large" className="filter-buttons">
        <Button color="inherit" onClick={() => props.apiCall()} style={{ border: "1px solid black" }}>All</Button>
        <Button color="inherit" onClick={() => props.filter(`men's clothing`)} style={{ border: "1px solid black" }}>Men</Button>
        <Button color="inherit" onClick={() => props.filter(`women's clothing`)} style={{ border: "1px solid black" }}>Women</Button>
        <Button color="inherit" onClick={() => props.filter("jewelery")} style={{ border: "1px solid black" }}>Jewellery</Button>
        <Button color="inherit" onClick={() => props.filter("electronics")} style={{ border: "1px solid black" }}>Electronics</Button>
      </ButtonGroup>
    </div>
  );
}

export default FilterProduct;
