import React from 'react';
import ToDo from './component/ToDo/ToDo';
import SettingProvider from './context';

import Auth from "./component/context/auth";
import LoginProvider from "./component/context/context";
import Login from "./component/context/login";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div>


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