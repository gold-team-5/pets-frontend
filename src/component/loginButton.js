import React from "react";
import { Button } from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";

export default function LoginButton(props){
    return (
         <Button  variant="" className="login-btn" >Sign-in <FiLogIn/></Button>
    )
}