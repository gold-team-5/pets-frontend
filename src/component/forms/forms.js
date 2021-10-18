import React from "react";
import useForm from "../../Hooks/form";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import { Button } from "react-bootstrap";
import "./form.css";
import Auth from "../context/auth";

export default function Form(props) {
  const { handleChange, handleSubmit } = useForm(props.addAppointment);

  return (
    <Auth capability="add">
      <form
        className="myForm"
        onSubmit={handleSubmit}
        style={{ marginBottom: "100px" }}
      >
        <h2>Add New Appointment</h2>
        <FormGroup labelFor="text-input">
          <InputGroup
            onChange={handleChange}
            name="book_doctor"
            type="text"
            placeholder="book_doctor"
          />
        </FormGroup>

        <FormGroup
          //  must check about boolean type input becuase in DB book_test Boolean type
          labelFor="text-input"
        >
          <input
            onChange={handleChange}
            name="book_states"
            type="text"
            placeholder="book_states"
          />
        </FormGroup>

        <FormGroup labelFor="text-input">
          <input
            onChange={handleChange}
            name="user_id"
            type="number"
            placeholder="user_id"
          />
        </FormGroup>

        {/* <FormGroup
      
      labelFor="text-input">
      <input  onChange={handleChange} name=" book_date" type="datetime-local" placeholder=" book_date" />
  
      </FormGroup> */}
        <FormGroup labelFor="text-input">
          <input
            onChange={handleChange}
            name="book_time"
            type="datetime-local"
            placeholder=" book_time"
          />
        </FormGroup>

        <button type="submit"
        className='btnpets' 
        >Add</button>
      </form>
    </Auth>
  );
}
