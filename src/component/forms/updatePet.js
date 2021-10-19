import React from "react";
import useForm from "../../Hooks/form";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import { Button } from "react-bootstrap";
import "./form.css";
import Auth from "../context/auth";

export default function UpdatePetForm(props) {
  //   const { handleChange, handleSubmit } = useForm(props.updatePet);
  console.log(
    "inside update form",
    props.updatePetData,
    ".............................."
  );
  return (
    <Auth capability="update">
      <form
        className="myForm"
        onSubmit={props.updatePet}
        style={{ marginBottom: "100px" }}
      >
        <h2>UPDATE PETS DATA</h2>
        <FormGroup labelFor="text-input">
          <InputGroup
            name="pet_name"
            type="text"
            defaultValue={props.updatePetData.pet_name}
          />
        </FormGroup>

        <FormGroup
          //  must check about boolean type input becuase in DB book_test Boolean type
          labelFor="text-input"
        >
          <InputGroup
            name="pet_age"
            type="text"
            placeholder="pet_age"
            defaultValue={props.updatePetData.pet_age}
          />
        </FormGroup>

        <FormGroup labelFor="text-input">
          <InputGroup
            name="pet_img"
            type="text"
            placeholder="pet_img"
            defaultValue={props.updatePetData.pet_img}
          />
        </FormGroup>

        <FormGroup labelFor="text-input">
          <InputGroup
            name="pet_type"
            type="text"
            placeholder="pet_type"
            defaultValue={props.updatePetData.pet_type}
          />
        </FormGroup>
        <FormGroup labelFor="text-input">
          <InputGroup
            name="pet_desc"
            type="text"
            placeholder=" pet_desc"
            defaultValue={props.updatePetData.pet_desc}
          />
        </FormGroup>
        {/* <FormGroup labelFor="text-input">
          <InputGroup
            name="pet_states"
            type="text"
            placeholder=" pet_states"
            defaultValue={props.updatePetData.pet_states}
          />
        </FormGroup> */}

        <Button type="submit">UPDATE </Button>
      </form>
    </Auth>
  );
}
