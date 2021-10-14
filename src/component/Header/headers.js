import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import Login from "../context/login";

export default function Headers(props) {
    return (


        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> 401-Phones Store </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home"> 🏡 Home</Nav.Link>
                    
                </Nav>
                <Login />
            </Container>
            
        </Navbar>

    )
}