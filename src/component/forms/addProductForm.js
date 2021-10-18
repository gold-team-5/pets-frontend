import React from "react";
import useForm from '../../Hooks/form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button } from "react-bootstrap";
// import "./form.css"
import Auth from "../context/auth";
export default function AddPetForm(props) {
    const { handleChange, handleSubmit } = useForm(props.addProduct);
    return (
        <Auth capability="add">
            <form className="myForm" onSubmit={handleSubmit}>
                <h2>Add New Product</h2>
                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="product_name" type="text" placeholder="product_name" />
                </FormGroup>

                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="product_img" type="text" placeholder="product_img" />
                </FormGroup>

                <FormGroup
                    labelFor="text-input">
                    <input onChange={handleChange} name="product_desc" type="text" placeholder="product_desc" />
                </FormGroup>

                <FormGroup

                    labelFor="text-input">
                    <input onChange={handleChange} name="product_type" type="text" placeholder="product_type" />

                </FormGroup>
                <FormGroup

                    labelFor="text-input">
                    <input onChange={handleChange} name="product_price" type="text" placeholder="product_price" />

                </FormGroup>
                <FormGroup

                    labelFor="text-input">
                    <input onChange={handleChange} name="user_id" type="text" placeholder="user_id" />  
                    
                    {/* //??????? */}

                </FormGroup>


                <button type="submit" className='btnpets'  > Add </button>
            </form>
        </Auth>
    )
}