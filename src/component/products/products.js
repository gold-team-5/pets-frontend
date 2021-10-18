import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddProductForm from "../forms/addProductForm";

export default function Product(props) {
  console.log("productData mmmmmmmmmmmmm" + props.productData);
  return (
    <>
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => props.searchItems2(e.target.value)}
      />
      {console.log()}

      <div className="productcard">
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
                      <Button variant="primary">Adoption</Button>
                      <Button
                        variant="primary"
                        onClick={() => props.deletProduct(item.id)}
                      >
                        delete
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => props.showupdateProductForm(index, item)}
                      >
                        update
                      </Button>
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
                      <Button variant="primary">Adoption</Button>
                      <Button
                        variant="primary"
                        onClick={() => props.deletProduct(item.id)}
                      >
                        delete
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => props.showupdateProductForm(index, item)}
                      >
                        update
                      </Button>
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
    </>
  );
}
