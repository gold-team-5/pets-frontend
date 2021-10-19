// import React, { useEffect, useState, useContext, Profiler } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Redirect } from "react-router";

// import { LoginContext } from "../context/context";
// import Auth from "../context/auth";


// import Form from "../forms/forms";
// import superagent from "superagent";
// import { When } from "react-if";
// import { v4 as uuid } from "uuid";



// import Product from "../products/products";

// import LoginProvider from "../context/context";

// import Cart from "../cart/cart";

// ;

//  const Productfun = (props) => {
//   const API = "http://localhost:3001";
//   const Context = useContext(LoginContext);

//   const [productData, setproductD]=useState([]);
// const[updateproductData,setUpdateProductD]=useState();
// const [count3, setcount3] = useState(0);

// useEffect(async () => {
//     console.log(' use effect product ????????????');
//     try {
//       console.log(Context.token, ">>>>>>>>>>>>>>>>>>..");
//       const ress = await superagent
//         .get(`${API}/products`)
//         .set("Authorization", "Bearer " + Context.token);
//       console.log(ress, "xxxxxxxxxxproduct");
//       setproductD(ress.body);
//       console.log(ress.body);
     
//     } catch (error) {
//       alert("Invalid Render");
//     }
//   }, []);
  
// };
// export default Productfun