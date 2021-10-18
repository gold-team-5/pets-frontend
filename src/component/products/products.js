import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddProductForm from "../forms/addProductForm";

export default function Product(props) {
 console.log('productData mmmmmmmmmmmmm'+ props.productData);

  return <>


    {/* <div>
      <form >
        <label for="type">Choose Product type:</label>

        <select onChange={props.search} name="product" id="product">
        <option value="all">all</option>
          <option value="cat">food</option>
          <option value="dog">toys</option>
          <option value="hamester">Accessories</option>
          <option value="rabbit">rabbit</option>
        </select>
      </form>
  

    </div> */}

    


      {props?.productData?.map((item, index) => {

        return (
          <div className="productcard">


            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.product_img} />
              <Card.Body>
                <Card.Title>{item.product_desc}</Card.Title>
                <Card.Text>
                  {item.product_price}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
                {/* <Button variant="primary" onClick={() => props.deletPet(item.id)} >delete</Button>
                <Button variant="primary" onClick={() => props.showupdatePetForm(index, item)}>update</Button> */}
              </Card.Body>
            </Card>
            <br />

          </div>
        )
      })
      // :
    }
    


    {/* <div className='addpetform' style={{ margin: '10px' }}>
      <AddPetForm addPet={props.addPet} />
    </div> */}
  </>;
}