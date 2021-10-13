import React from "react";
import useForm from '../../Hooks/form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button } from "react-bootstrap";
import "./form.css"
import Auth from "../context/auth";

export default function Form(props) {
  const { handleChange, handleSubmit } = useForm(props.addItem);

  return (
    <Auth capability="create">
      <form className="myForm" onSubmit={handleSubmit}>
        <h2>Add New Phone</h2>
        <FormGroup
          label="Phones"
          labelFor="text-input">
          <InputGroup required onChange={handleChange} name="text" type="text" placeholder="Phone Type" />
        </FormGroup>

        <FormGroup
          label="Phone Descreption"
          labelFor="text-input">
          <input required onChange={handleChange} name="assignee" type="text" placeholder="Phone Descreption" />
        </FormGroup>

        <FormGroup
        label="Phone Image"
        labelFor="text-input">
        <input required onChange={handleChange} name="difficulty" type="text" placeholder="Phone Image" />
          
          
          
        </FormGroup>
        <Button type="submit">Add Phone</Button>
      </form>
    </Auth>
  )
}