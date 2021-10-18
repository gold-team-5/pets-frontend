import React, { useEffect, useState } from "react";
import superagent from "superagent";
import base64 from "base-64";
import jwt from "jsonwebtoken";
import cookie from "react-cookies";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export const LoginContext = React.createContext();
const API = "http://localhost:3001"; // .env

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [loggedOut, setLoggedOut] = useState(false);
  const [userinfo, setuserinfo] = useState([]);
  // initial render
  useEffect(() => {
    const tokenFromCookie = cookie.load("token");
    console.log("aaaaaaaaaaaaaaaaaaaaaaa", tokenFromCookie);
    validateJwToken(tokenFromCookie);
    setToken(tokenFromCookie);
  }, []);

  const signUp = async (username, password, role, phone, address, gender) => {
    // {username: password} encoded
    //Basic base64(username:password)
    try {
      let user = {
        user_name: username,
        user_password: password,
        user_role: role,
        user_phone: phone,
        user_address: address,
        user_gender: gender,
      };

      const response = await superagent.post(`${API}/signup`, user);

      console.log(response);

      login(username, password);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "UserName is aleady taken!",
      });
    }
  };

  const login = async (username, password) => {
    // {username: password} encoded
    //Basic base64(username:password)
    try {
      const encodedUsernameAndPassword = base64.encode(
        `${username}:${password}`
      );
      console.log("Before Request");
      console.log(username);
      console.log(password);

      const response = await superagent
        .post(`${API}/signin`)
        .set("Authorization", `Basic ${encodedUsernameAndPassword}`);

      console.log(response.body.user);
      setuserinfo(response.body.user);

      //check
      validateJwToken(response.body.token);
      console.log("sssssssssssssssssssssssss🎁", response.body.token);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid UserName or Password!",
      });
    }
  };

  const validateJwToken = (token) => {
    if (token) {
      // the user is logged in
      const user = jwt.decode(token);
      setLoginState(true, user);

      cookie.save("token", token);
    } else {
      // the user is NOT logged in
      setLoginState(false, {});
    }
  };

  const setLoginState = (loggedIn, user) => {
    setLoggedIn(loggedIn);
    setUser(user);
  };

  const logout = () => {
    setLoginState(false, {});
    // setLoggedOut(true)
    cookie.remove("token");
  };

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const state = {
    loggedIn,
    login,
    logout,
    loggedOut,
    user,
    can,
    signUp,
    token,
    userinfo,
  };

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
