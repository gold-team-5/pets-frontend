
// import React from 'react'
import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import List from '../list/list';

import Headers from '../Header/header';
import "./ToDo.css"
import {LoginContext} from '../context/context'
import Auth from '../context/auth';
import Appointment from '../Appointment/Appointment';
import SignUp from '../context/signUp';
import Form from '../forms/forms';

import superagent from "superagent"
import Header from "../Header/header";
import Home from "../home/home";
import AboutUS from "../aboutUS/aboutUS";
import Pets from "../pets/pets";
import Products from "../products/products";
import Services from "../services/services";
import LoginProvider from "../context/context";
import Login from '../context/login'


const ToDo = (props) => {

  const API = 'http://localhost:3001';
  const Context=useContext(LoginContext)
  const [list, setList] = useState([]);
  const [count, setcount] = useState(0);
  const [incomplete, setIncomplete] = useState([]);



//add Appointment function
  async function addAppointment(item) {
    console.log(item,',,,,,,,,,,,,,,,,,,,,,,,,')
    


      let obj = {
        book_doctor: item.book_doctor,
        book_states:item.book_states,
        user_id:item.user_id,
        // book_date:item.book_date,
        book_time:item.book_time,
      }
    try {
      console.log(Context.token)
      const res = await superagent.post(`${API}/newAppointment`)
     
      .send(obj)
      .set('Authorization', 'Bearer ' + Context.token)
      setcount(count + 1)
      
  } catch (error) {
      alert('Invalid data');
  }
  }

  //delete function
  async function delAppointment(id) {
    console.log(id);
    try {
      const res = await superagent.delete(`${API}/appointment/${id}`)
      .set('Authorization', 'Bearer ' + Context.token)
      const items = list.filter(item => item.id !== id);
      setList(items);
      console.log("items>>>>",items);
      console.log("delete",res);
      setcount(count + 1)
  } catch (error) {
      alert('Invalid delete');
  }

  }
  //update state function 

async function updateAppointment(item) {

    let obj = {
      book_doctor: item.book_doctor,
      book_states:!item.book_states,
      user_id:item.user_id,
      book_time:item.book_time,
    }
   
    try {

      const res = await superagent.put(`${API}/book/${item.id}`)
      .send(obj)
      .set('Authorization', 'Bearer ' + Context.token)
    
      
     
      setcount(count + 1)
  } catch (error) {
      alert('Invalid update');
  }

  }


  
  // function addItem(item) {
  //   let data = { id: uuid(), text: item.text, assignee: item.assignee, complete: false, difficulty: item.difficulty }
  //   setList([...list, data]);
  // }

  // function deleteItem(id) {
  //   const items = list.filter(item => item.id !== id);
  //   setList(items);
  // }

  // function toggleComplete(id) {

  //   const items = list.map(item => {
  //     if (item.id == id) {
  //       item.complete = !item.complete;
  //     }
  //     return item;
  //   });

  //   setList(items);
  // }

  useEffect( async () => {
    try {
      console.log(Context.token,'>>>>>>>>>>>>>>>>>>..')
      const res = await superagent.get(`${API}/appointment`)
      .set('Authorization', 'Bearer ' + Context.token)
      console.log(res,'xxxxxxxxxxxxxxxxxxxxxxxx..')
      
        setList(res.body)
       
        console.log(res.body);
        console.log('..............',list)
  } catch (error) {
      alert('Invalid Render');
  }

  }, [count]);

  
  
  
  return (
    <Router>
      <Header />
       {/* <SignUp /> */}
    
       {/* <Auth capability="show">
         <Appointment 
         list={list}
         delAppointment={delAppointment}
         updateAppointment={updateAppointment}

         />

           <Form addAppointment={addAppointment} />
         
        
         </Auth> */}
     
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Pets">
          <Pets />
        </Route>
        <Route exact path="/Products">
          <Products />
        </Route>
        <Route exact path="/Services">
          <Services list={list}
           addAppointment={addAppointment}
            delAppointment={delAppointment}
         updateAppointment={updateAppointment} />
         
        </Route>
        <Route exact path="/AboutUS">
          <AboutUS />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
      {/* <When condition={!this.context.loggedIn}>
        <Login />
      </When> */}
    </Router>
    
   
  );

    }

export default ToDo;