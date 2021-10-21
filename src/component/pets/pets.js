import React, { useState, useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import AddPetForm from "../forms/addPetForm";
import Auth from "../context/auth";
import "../reset.css"
import "./pets.css"

import Main from "../card/Main";

export default function Pets(props) {

  return (
    <>
      <h3 id="h22" >PETS</h3>


      <form action="javascript:" class="search-bar" style={{ minHeight: '200px' }}>
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
        {/* tyle={{display: "flex",flex-direction: "row",flex-wrap: "wrap",justify-content:" space-evenly",align-items: "center"}} */}

        {props.searchInput.length > 1
          ? props?.filteredResults?.map((item, index) => {
            {
              if (item.pet_states == true) {
                return (


                  <Main type={'pets'} item={item} index={item.id} showupdatePetForm={props.showupdatePetForm} deletPet={props.deletPet} alertForAdoption={props.alertForAdoption} pet_desc={item.pet_desc} pet_name={item.pet_name} pet_img={item.pet_img} />


                );
              }
            }
          })
          : props?.petData?.map((item, index) => {
            if (item.pet_states == true) {
              return (
                <>

                  <Main type={'pets'} item={item} index={item.id} showupdatePetForm={props.showupdatePetForm} deletPet={props.deletPet} alertForAdoption={props.alertForAdoption} pet_desc={item.pet_desc} pet_name={item.pet_name} pet_img={item.pet_img} />

                </>
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
