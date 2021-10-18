import React from "react";
import useForm from '../../Hooks/form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button } from "react-bootstrap";
import "./form.css"
import Auth from "../context/auth";
export default function AddPetForm(props) {
    const { handleChange, handleSubmit } = useForm(props.addPet);
    return (
        <Auth capability="add">
            <form className="myForm" onSubmit={handleSubmit} style={{marginBottom:"100px"}}>
                <h2>Add New Pet</h2>
                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_name" type="text" placeholder="pet_name" />
                </FormGroup>
                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_age" type="text" placeholder="pet_age" />
                </FormGroup>
                <FormGroup
                    labelFor="number">
                    <input onChange={handleChange} name="pet_q" type="text" placeholder="pet_q" />
                </FormGroup>
                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_img" type="text" placeholder="pet_img" />
                </FormGroup>
                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_type" type="text" placeholder="pet_type" />
               </FormGroup>
                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_desc" type="text" placeholder="pet_desc" />
                </FormGroup>
                <FormGroup

                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_states" type="text" placeholder="pet_states" />

                </FormGroup>
                <button type="submit" className='btnpets' > Add  . </button>
            </form>
        </Auth>
    )
}