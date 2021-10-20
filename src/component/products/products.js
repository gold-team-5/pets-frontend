import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddProductForm from "../forms/addProductForm";
import Auth from "../context/auth";

// import '../pets/pets.css';
import "../reset.css"
import './Products.css';
import Main from "../card/Main";
export default function Product(props) {
  console.log("productData mmmmmmmmmmmmm" + props.productData);
  return (
    <div style={{ position: "relative" }}>

      {/* <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => props.searchItems2(e.target.value)}
      /> */}
      <h3 id="h2product" className='producttittle'>Product</h3>

      <form action="javascript:" class="search-bar" style={{ minHeight: '200px' }}>
        <input type="search" name="search" pattern=".*\S.*"
          className='inputsss'
          required onChange={(e) => props.searchItems2(e.target.value)} />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>

      <div className="cotanerProduct">

        {console.log(props.filterprouduct, "ggggggggggggggggggggggg")}
        {props.productsearch.length > 1
          ? props?.filterprouduct?.map((item, index) => {
            return (
              // props.showupdateProductForm(index, item)
              // props.handelBuy(item)
              // props.deletProduct(item.id)
              // {item.product_price} {item.product_desc} {item.product_name} src={item.product_img}
              <Main type={"product"} item={item} deletProduct={props.deletProduct} handelBuy={props.handelBuy} showupdateProductForm={props.showupdateProductForm} />
            );
          })
          : props?.productData?.map((item, index) => {
            return (

              <Main type={"product"} item={item} deletProduct={props.deletProduct} handelBuy={props.handelBuy} showupdateProductForm={props.showupdateProductForm} />

            );
          })}
        {/* 
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.product_img} />
              <Card.Body>
                <Card.Title>{item.product_desc}</Card.Title>
                <Card.Text>
                  {item.product_price}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
                <Button variant="primary" onClick={() => props.deletProduct(item.id)} >delete</Button>
                <Button variant="primary" onClick={() => props.showupdateProductForm(index, item)}>update</Button>
              </Card.Body>
            </Card>
            <br /> */}
      </div>


      <div className="addpetform" style={{ margin: "10px" }}>
        <AddProductForm addproduct={props.addProduct} />
      </div>

    </div>
  );
}
