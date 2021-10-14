import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Navbar, Nav, Container } from "react-bootstrap";
import Login from "../context/login";
import { When } from 'react-if';
import  { useContext } from 'react';

import "@blueprintjs/core/lib/css/blueprint.css";
import "./header.css";

import { Navbar, Button, Alignment, Icon } from "@blueprintjs/core";
import { GiDogHouse } from "react-icons/gi";
import { MdSupervisorAccount, MdFavorite } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import logo from "../../img/Screenshot__137_-removebg-preview.png";

import { LoginContext } from "../context/context";
import LoginButton from "../loginButton";
import LogoutButton from "../logoutButton";

export default function Headers(props) {
  const [showSearch, setshowSearch] = useState(false);
  const context = useContext(LoginContext);


  return (
    <div id="header">
      <div id="up" style={{ height: "70px" }}>
        <nav class="bp3-navbar .modifier ">
          <div class="bp3-navbar-group bp3-align-left">
            <img class="logo" src={logo} alt="logo" />
          </div>
          <div class="up-right">
            {showSearch && (
              <>
                <input
                  class="bp3-input"
                  placeholder="Search files..."
                  type="text"
                />
                <span class="">&nbsp; &nbsp; &nbsp; </span>
              </>
            )}

            <div>
             
               <a href="/login">
                 {(!context.loggedIn) ? <LoginButton /> : <LogoutButton />}
               {/* <Button
                icon="log-in"
                class="bp3-button bp3-minimal bp3-icon-user"
               
              >
                   log-In{" "}
              </Button> */}
              </a>


              


              <span class="">&nbsp; </span>

              <Button
                icon="shopping-cart"
                class="bp3-button bp3-minimal bp3-icon-notifications"
              >
                (0)
              </Button>
            </div>
          </div>
        </nav>
      </div>

      <div id="down">
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            {/* <Navbar.Divider /> */}
            <div id="pages-down">
              <a href="/">
                <Button
                  className="bp3-minimal"
                  style={{ color: "var(--Lgray)" }}
                >
                  {" "}
                  <AiFillHome size="1.5em" color="var(--Lgray)" /> Home
                </Button>
              </a>

              <a href="Pets">
                <Button
                  className="bp3-minimal"
                  style={{ color: "var(--Lgray)" }}
                >
                  <FaDog size="1.5em" color="var(--Lgray)" /> Pets
                </Button>
              </a>

              <a href="Products">
                <Button
                  className="bp3-minimal"
                  style={{ color: "var(--Lgray)" }}
                >
                  <GiDogHouse size="1.5em" color="var(--Lgray)" /> Products
                </Button>
              </a>

              <a href="Services">
                <Button
                  className="bp3-minimal"
                  style={{ color: "var(--Lgray)" }}
                >
                  <MdFavorite size="1.5em" color="var(--Lgray)" /> Services
                </Button>
              </a>

              <a href="AboutUS">
                <Button
                  className="bp3-minimal"
                  style={{ color: "var(--Lgray)" }}
                >
                  <MdSupervisorAccount size="1.5em" color="var(--Lgray)" />{" "}
                  About-Us
                </Button>
              </a>

              {/* <Icon icon="home" size="iconSize" intent="intent" /> */}
            </div>
            <link
              href="path/to/node_modules/normalize.css/normalize.css"
              rel="stylesheet"
            />
          </Navbar.Group>
        </Navbar>
      </div>
      {/* <p>fdasdf</p> */}
    </div>
  );
}
