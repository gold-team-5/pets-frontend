import React from "react";
import ToDo from "./component/ToDo/ToDo";
import SettingProvider from "./context";
import './App.css'
import Auth from "./component/context/auth";
import LoginProvider from "./component/context/context";
import Login from "./component/context/login";

import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./component/Appointment/Appointment";

import "./component/Header/header.css";
// import Footer from "./component/footer/footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="bodycolor">
        <LoginProvider>
          <SettingProvider>
            {/* user - editor - admin */}

            <ToDo />
          </SettingProvider>
        </LoginProvider>

        
      </div>
    );
  }
}
