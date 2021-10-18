import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddPetForm from "../forms/addPetForm";

export default function Pets(props) {

  return <>
 
{/* return just search result  */}
    {props.searchInput.length > 1 ? (
      props?.filteredResults?.map((item, index) => {
        return (
          <div className="petCard">


            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.pet_img} />
              <Card.Body>
                <Card.Title>{item.pet_name}</Card.Title>
                <Card.Text>
                  {item.pet_age}
                </Card.Text>
                <Card.Text>
                  {item.pet_desc}
                </Card.Text>

                <Button variant="primary">Adoption</Button>
                <Button variant="primary" onClick={() => props.deletPet(item.id)} >delete</Button>
                <Button variant="primary" onClick={() => props.showupdatePetForm(index, item)}>update</Button>
              </Card.Body>
            </Card>
            <br />

          </div>
        )
      })
    ) : (
      props?.petData?.map((item, index) => {
        return (
          <div className="petCard">


            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.pet_img} />
              <Card.Body>
                <Card.Title>{item.pet_name}</Card.Title>
                <Card.Text>
                  {item.pet_age}
                </Card.Text>
                <Card.Text>
                  {item.pet_desc}
                </Card.Text>

                <Button variant="primary">Adoption</Button>
                <Button variant="primary" onClick={() => props.deletPet(item.id)} >delete</Button>
                <Button variant="primary" onClick={() => props.showupdatePetForm(index, item)}>update</Button>
              </Card.Body>
            </Card>
            <br />

          </div>
        )
      })
    )}


    <div className='addpetform' style={{ margin: '10px' }}>
      <AddPetForm addPet={props.addPet} />
    </div>
  </>;
}
