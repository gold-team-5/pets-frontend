import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddProductForm from "../forms/addProductForm";
// import '../pets/pets.css';
import './Products.css';
export default function Product(props) {
  console.log("productData mmmmmmmmmmmmm" + props.productData);
  return (
    <div style={{position:"relative"}}>
   
      {/* <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => props.searchItems2(e.target.value)}
      /> */}
      <h3 className='producttittle'>Product</h3>

<form action="javascript:" class="search-bar" style={{minHeight:'200px'}}>
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
                <div className="petCard">
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.product_img} />
                    <Card.Body>
                      <Card.Title>{item.product_name}</Card.Title>

                      <Card.Text>{item.product_desc}</Card.Text>
                      <Card.Text>{item.product_price}</Card.Text>
                      <button className="btnpets"
                      //  variant="primary"
                      >Adoption</button>

                      <button className="btnpets"
                        // variant="primary"
                        onClick={() => props.deletProduct(item.id)}
                      >
                        delete
                      </button>
                      <button className="btnpets"
                        // variant="primary"
                        onClick={() => props.showupdateProductForm(index, item)}
                      >
                        update
                      </button>
                    </Card.Body>
                  </Card>
                  <br />
                </div>
              );
            })
          : props?.productData?.map((item, index) => {
              return (
                <div className="petCard">
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.product_img} />
                    <Card.Body>
                      <Card.Title>{item.product_name}</Card.Title>

                      <Card.Text>{item.product_desc}</Card.Text>
                      <Card.Text>{item.product_price}</Card.Text>
                      <button  className="btnpets"
                      // variant="primary"
                      >Adoption</button>
                      <button className="btnpets"
                        // variant="primary"
                        onClick={() => props.deletProduct(item.id)}
                      >
                        delete
                      </button>
                      <button className="btnpets"
                        // variant="primary"
                        onClick={() => props.showupdateProductForm(index, item)}
                      >
                        update
                      </button>
                    </Card.Body>
                  </Card>
                  <br />
                </div>
                
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
