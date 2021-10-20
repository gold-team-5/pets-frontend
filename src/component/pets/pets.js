import React, { useState, useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import AddPetForm from "../forms/addPetForm";
import Swal from "sweetalert2";
import Auth from "../context/auth";
import { LoginContext } from "../context/context";
import superagent from "superagent";
import "./pets.css";
export default function Pets(props) {
  const Context = useContext(LoginContext);

  const API = 'https://gold-team-mid-project.herokuapp.com'
  
  return (
    <>
<h3 className='petstittle'>PETS</h3>

<form action="javascript:" class="search-bar" style={{minHeight:'200px'}}>
	<input type="search" name="search" pattern=".*\S.*"
  className='inputsss' required 
   onChange={(e) => props.searchItems(e.target.value)} />
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
</form>
<div className="contanerpra">
          <p className="pragraphpets">
            Animals are in need of forever homes as more and more people who
            adopted pets during the coronavirus <br></br>pandemic are bringing
            them back to shelters when they head back to the office As COVID-19
            restrictions are lifted across the country, there's a disturbing
            trend emerging for our four-legged friends.
          </p>
        </div>
      <div className="cotanerpets">

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


                      <button className="btnpets" onClick={() => props.alertForAdoption(item.id)}>
                        Ask For Adoption
                      </button>

                      <Auth capability="add">
                        <button className="btnpets"
                          // variant="primary"
                          onClick={() => props.deletPet(item.id)}
                        >
                          delete
                        </button>
                        <button className="btnpets"
                          // variant="primary"
                          onClick={() => props.showupdatePetForm(index, item)}
                        >
                          update
                        </button>
                      
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

                    <button className="btnpets"  onClick={() => props.alertForAdoption(item.id)}>
                      Ask For Adoption
                    </button>

                    <Auth capability="add">

                      <button className="btnpets"
                        // variant="primary"
                        onClick={() => props.deletPet(item.id)}
                      >
                        delete
                      </button>
                      <button className="btnpets"
                        // variant="primary"
                        onClick={() => props.showupdatePetForm(index, item)}
                      >
                        update
                      </button >
                      
                    </Auth>
                  </Card.Body>
                </Card>
                <br />
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
