import React from "react";
import { FormGroup, InputGroup, Icon } from "@blueprintjs/core";
import "./cart.css";
import img2 from "../../img/istockphoto-1152482732-612x612-removebg-preview.png";


export default function Pets(props) {
  return (
    <div id="contener">
      <div id="iner-contener">
        <h2 contenteditable="true">shopping cart </h2>
        <img id="petsIMG" src={img2} alt="img2" />
      </div>

      <div id="cart">
        <div id="left">{/* list   */}</div>

        <div id="right">
          {/* form   */}

          <FormGroup
            helperText="Helper text with details..."
            label="Label A"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" placeholder="Placeholder text" />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
