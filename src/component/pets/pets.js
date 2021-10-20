import React, { useState, useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import AddPetForm from "../forms/addPetForm";
import Swal from "sweetalert2";
import Auth from "../context/auth";
import { LoginContext } from "../context/context";
import superagent from "superagent";

export default function Pets(props) {
  const Context = useContext(LoginContext);

  const API = 'https://gold-team-mid-project.herokuapp.com'
  
  return (
    <>

      <input icon='search'
        placeholder='Search...'
        onChange={(e) => props.searchItems(e.target.value)}
      />

      {/* return just search result  */}
      {props.searchInput.length > 1
        ? props?.filteredResults?.map((item, index) => {
          {  //  true  id=null
            if (item.pet_states == true) {
              return (
                <div className="petCard">
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.pet_img} />
                    <Card.Body>
                      <Card.Title>{item.pet_name}</Card.Title>
                      <Card.Text>{item.pet_age}</Card.Text>
                      <Card.Text>{item.pet_desc}</Card.Text>


                      <Button variant="primary" onClick={() => props.alertForAdoption(item.id)}>
                        Ask For Adoption
                      </Button>

                      <Auth capability="add">
                        <Button
                          variant="primary"
                          onClick={() => props.deletPet(item.id)}
                        >
                          delete
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => props.showupdatePetForm(index, item)}
                        >
                          update
                        </Button>
                        {/* <Button
                          variant="primary"
                          onClick={() => props.updatePetState(index, item)}
                        >
                          APPROVE ADOPTION
                        </Button> */}
                      </Auth>

                    </Card.Body>
                  </Card>
                  <br />
                </div>
              );
            }
          }
        })
        : props?.petData?.map((item, index) => {
          if (item.pet_states == true) {
            return (
              <div className="petCard">
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.pet_img} />
                  <Card.Body>
                    <Card.Title>{item.pet_name}</Card.Title>
                    <Card.Text>{item.pet_age}</Card.Text>
                    <Card.Text>{item.pet_desc}</Card.Text>

                    <Button variant="primary" onClick={() => props.alertForAdoption(item.id)}>
                      Ask For Adoption
                    </Button>

                    <Auth capability="add">

                      <Button
                        variant="primary"
                        onClick={() => props.deletPet(item.id)}
                      >
                        delete
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => props.showupdatePetForm(index, item)}
                      >
                        update
                      </Button>
                      {/* <Button
                        variant="primary"
                        onClick={() => props.updatePetState(index, item)}
                      >
                        APPROVE ADOPTION
                      </Button> */}
                    </Auth>
                  </Card.Body>
                </Card>
                <br />
              </div>
            );
          }
        })}

      <div className="addpetform" style={{ margin: "10px" }}>
        <AddPetForm addPet={props.addPet} />
      </div>
    </>
  );
}
