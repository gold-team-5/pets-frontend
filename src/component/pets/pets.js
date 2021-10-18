import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddPetForm from "../forms/addPetForm";
import Swal from "sweetalert2";
import "./pets.css";
export default function Pets(props) {
  function alertForAdoption() {
    Swal.fire({
      icon: "info",
      // title: " Welcome ",
      text: "You should take the approvment from admin 🐾🐾",
    });
  }
  return (
    <>

<div class="container">
 <div class="hider">
  <span class="character">P</span>
 </div>
 <div class="hider">
  <span class="character">E</span>
 </div>
 <div class="hider">
  <span class="character">T</span>
 </div>
 <div class="hider">
  <span class="character">S</span>
 </div>
 
</div>
      <div className="cotanerpets">
        <div className="contanerpra">
          <p className="pragraphpets">
            Animals are in need of forever homes as more and more people who
            adopted pets during the coronavirus <br></br>pandemic are bringing
            them back to shelters when they head back to the office As COVID-19
            restrictions are lifted across the country, there's a disturbing
            trend emerging for our four-legged friends.
          </p>
        </div>
        {/* return just search result  */}
        {props.searchInput.length > 1
          ? props?.filteredResults?.map((item, index) => {
              {
                if (item.pet_states == true) {
                  return (
                    <div className="petCard">
                      <Card key={index} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={item.pet_img} />
                        <Card.Body>
                          <Card.Title>{item.pet_name}</Card.Title>
                          <Card.Text>{item.pet_age}</Card.Text>
                          <Card.Text>{item.pet_desc}</Card.Text>

                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={alertForAdoption}
                          >
                            Adappet
                          </button>
                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={() => props.deletPet(item.id)}
                          >
                            delete
                          </button>
                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={() => props.showupdatePetForm(index, item)}
                          >
                            update
                          </button>
                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={() => props.updatePetState(index, item)}
                          >
                            APPROVED
                          </button>
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
                    <div className="petCard">
                      <Card key={index} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={item.pet_img} />
                        <Card.Body>
                          <Card.Title>{item.pet_name}</Card.Title>
                          <Card.Text>{item.pet_age}</Card.Text>
                          <Card.Text>{item.pet_desc}</Card.Text>

                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={alertForAdoption}
                          >
                            Adappet
                          </button>
                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={() => props.deletPet(item.id)}
                          >
                            delete
                          </button>
                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={() => props.showupdatePetForm(index, item)}
                          >
                            update
                          </button>
                          <button
                            className="btnpets"
                            // variant="primary"
                            onClick={() => props.updatePetState(index, item)}
                          >
                            APPROVED
                          </button>
                        </Card.Body>
                      </Card>
                      <br />
                    </div>
                  </div>
                );
              }
            })}
      </div>

      <div className="addpetform" style={{ margin: "10px" }}>
        <AddPetForm addPet={props.addPet} />
      </div>
    </>
  );
}
