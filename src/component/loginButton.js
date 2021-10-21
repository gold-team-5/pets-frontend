import React from "react";
import { Button } from "react-bootstrap";
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { useContext } from "react";
import { LoginContext } from "./context/context";

export default function LoginButton(props){
    return (
         <Button  variant="" className=" btn login-btn" >Sign-in <CgLogIn/></Button>
    )
}