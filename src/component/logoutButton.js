import React from "react";
import { Button } from "react-bootstrap";
import { CgLogOut } from "react-icons/cg";
import { useContext } from "react";
import { LoginContext } from "./context/context";

export default function LogoutButton(props){
    const context=useContext(LoginContext);

    return (
        <Button className="logout-btn" onClick={context.logout}>
      Log Out <CgLogOut/>
    </Button>
    )
}