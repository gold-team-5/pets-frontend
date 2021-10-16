import React from "react";
import { Button } from "react-bootstrap";
import { CgLogOut } from "react-icons/cg";
import { useContext } from "react";
import { LoginContext } from "./context/context";


export default function LogoutButton(props){
    const context=useContext(LoginContext);
    

    return (
      
        <Button variant="" className="logout-btn" onClick={ context.logout} href='/'>
          
     
       Log Out <CgLogOut/>
    </Button>
    )
}