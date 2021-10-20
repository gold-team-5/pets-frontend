
import React from "react";
import useForm from '../../Hooks/form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Button } from "react-bootstrap";
import "./form.css"
import Auth from "../context/auth";
export default function UpdateforimProduct  (props) {
     
        
        return (
            <div>
              <Auth capability="update">
      <form className="myFormm" onSubmit={props.updateProduct}>
        <h2>UPDATE PRODUCT DATA</h2>
        <FormGroup
          labelFor="text-input">
          <InputGroup   name="product_name" type="text" defaultValue={props.updateproductData.pet_name} />
        </FormGroup>

         <FormGroup
        //  must check about boolean type input becuase in DB book_test Boolean type
          labelFor="text-input">
          <InputGroup  name="product_desc" type="text" placeholder="product_desc" defaultValue={props.updateproductData.product_desc} />
        </FormGroup>

        <FormGroup
        labelFor="text-input">
         <InputGroup  name="product_type" type="text" placeholder="product_type" defaultValue={props.updateproductData.product_type}/>
        </FormGroup>

        <FormGroup
      
      labelFor="text-input">
      <InputGroup  name="product_price" type="text" placeholder="product_price" defaultValue={props.updateproductData.product_price}/>
  
      </FormGroup>
      <FormGroup
      
      labelFor="text-input">
      <InputGroup name="product_img" type="text" placeholder="product_img" defaultValue={props.updateproductData.product_img}/>
  
      </FormGroup>
      {/* <FormGroup
      
      labelFor="text-input">
      <InputGroup  name="user_id" type="text" placeholder="user_id" defaultValue={props.updateproductData.user_id}/>
  
      </FormGroup>  */}


        <Button type="submit">UPDATE </Button>
      </form>
    </Auth>  
            </div>
        )
    }



