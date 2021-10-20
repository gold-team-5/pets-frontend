import React from "react";
import useForm from '../../Hooks/form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button,Modal } from "react-bootstrap";
// import "./form.css"
import Auth from "../context/auth";

export default function AddProductForm(props) {
    const { handleChange, handleSubmit } = useForm(props.addproduct);
    return (


        <Auth capability="add">



{console.log('>>>>>>>>>>>>...',props.showUpdateFormproduc)}
<Modal show={props.showUpdateFormproduct} onHide={props.handelcloseproduct}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handelcloseproduct}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handelcloseproduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>










            <form className="myFormm" onSubmit={handleSubmit}>
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
               


                <button type="submit" className='btnpets'  > Add </button>
            </form>
        </Auth>
    )
}