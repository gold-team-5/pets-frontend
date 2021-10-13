import React, { Component } from 'react'

import { useContext, useState } from "react";
import { When } from "react-if";
import { LoginContext } from "./context";
import { Button, Form } from "react-bootstrap";
import "./signUp.css"

export default function SignUp(props) {
    const context = useContext(LoginContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        let username = event.target.userName.value
        let password = event.target.password.value
        let role = 'user'
        context.signUp(username, password, role);


    };
    
    return (
        <When condition={!context.loggedIn}>
        <div className="SignUpForm">
            
                <Form onSubmit={handleSubmit}>
                    <h3> Sign Up </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Your Name </Form.Label>
                        <Form.Control required name="userName" type="text" placeholder="Name" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            
        </div>
        </When>
    );
}

