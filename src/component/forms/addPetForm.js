import React from "react";
import useForm from '../../Hooks/form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button } from "react-bootstrap";
import "./form.css"
import"./petadd.css"
import '../Appointment/Appointment.css'
// import '../pets/pets.css'
import Auth from "../context/auth";
export default function AddPetForm(props) {
    const { handleChange, handleSubmit } = useForm(props.addPet);
    return (
        <div className="maindiv">
        <Auth capability="add">
            <form className="myFormmapp" onSubmit={handleSubmit} style={{marginBottom:"100px"}}>
                <h2 id="addnewpet">Add New Pet</h2>
                <div className="inputapp">
                <FormGroup
                className="petsnput"
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_name" type="text" placeholder="pet_name" />
                </FormGroup>
                <FormGroup
                className="petsnput"
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_age" type="text" placeholder="pet_age" />
                </FormGroup>
                {/* <FormGroup
                    labelFor="number">
                    <input onChange={handleChange} name="pet_q" type="text" placeholder="pet_q" />
                </FormGroup> */}
                <FormGroup
                className="petsnput"
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_img" type="text" placeholder="pet_img" />
                </FormGroup>
                <FormGroup
                className="petsnput"
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_type" type="text" placeholder="pet_type" />
               </FormGroup>
                <FormGroup
                 className="petsnput"
                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_desc" type="text" placeholder="pet_desc" />
                </FormGroup>
                </div>
                {/* <FormGroup

                    labelFor="text-input">
                    <input onChange={handleChange} name="pet_states" type="text" placeholder="pet_states" />


                </FormGroup> */}
                <button type="submit" className='btrpet' > Add   </button>

                
                {/* <Button type="submit"> Add </Button> */}

            </form>
            
        </Auth>
        </div>
    )
}