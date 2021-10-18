// import React from 'react'
import React, { useEffect, useState, useContext, Profiler } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import List from '../list/list';
import Headers from '../Header/header';
import "./ToDo.css"
import { LoginContext } from '../context/context'
import Auth from '../context/auth';
import Appointment from '../Appointment/Appointment';
import SignUp from '../context/signUp';
import Form from '../forms/forms';
import superagent from "superagent"
import { When } from "react-if";
import { v4 as uuid } from "uuid";
import Header from "../Header/header";
import Home from "../home/home";
import AboutUS from "../aboutUS/aboutUS";
import Pets from "../pets/pets";
import Products from "../products/products";
import Services from "../services/services";
import LoginProvider from "../context/context";
import Login from '../context/login'
import Cart from "../cart/cart";
import Profile from "../Profile/profile";

const ToDo = (props) => {

  const API = 'http://localhost:3001';
  const Context = useContext(LoginContext)
  const [list, setList] = useState([]);
  const [count, setcount] = useState(0);
  const [incomplete, setIncomplete] = useState([]);
  //.................pet states...............................................
  const [petData, setPetData] = useState([]);
  const [updatePetData, setUpdatePetData] = useState()
  const [count2, setcount2] = useState(0);
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [index, setIndex] = useState();
 ;

  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
//.................pet states...............................................


  //add Appointment function
  async function addAppointment(item) {
    console.log(item, ',,,,,,,,,,,,,,,,,,,,,,,,')


    let obj = {
      book_doctor: item.book_doctor,
      book_states: item.book_states,
      user_id: item.user_id,
      // book_date:item.book_date,
      book_time: item.book_time,
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
    console.log("items>>>>", items);
    console.log("delete", res);
    setcount(count + 1)
  } catch (error) {
    alert('Invalid delete');
  }

}
//update state function to book Appointment📑

async function updateAppointment(item) {

  let obj = {
    book_doctor: item.book_doctor,
    book_states: !item.book_states,
    user_id: item.user_id,
    book_time: item.book_time,
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
//function to cancel  booking 

async function delAppointmentfromuser(item){

  let obj = {
    book_doctor: item.book_doctor,
    book_states: !item.book_states,
    user_id: item.user_id,
    book_time: item.book_time,
  }

  try {

    const res = await superagent.put(`${API}/bookfromuser/${item.id}`)
      .send(obj)
      .set('Authorization', 'Bearer ' + Context.token)



    setcount(count + 1)
  } catch (error) {
    alert('Invalid update');
  }

}





useEffect(async () => {
  try {
    console.log(Context.token, '>>>>>>>>>>>>>>>>>>..')
    const res = await superagent.get(`${API}/appointment`)
      .set('Authorization', 'Bearer ' + Context.token)
    console.log(res, 'xxxxxxxxxxxxxxxxxxxxxxxx..')

    setList(res.body)

    console.log(res.body);
    console.log('..............', list)
  } catch (error) {
    alert('Invalid Render');
  }

}, [count]);

//..........................pet functionality.............................................
////get pets data /////////////////////
useEffect(async () => {
  try {
    console.log(Context.token, '>>>>>>>>>>>>>>>>>>..')
    const res = await superagent.get(`${API}/pet`)


    setPetData(res.body)

    console.log(res.body);
    console.log('..............', petData)
  } catch (error) {
    alert('Invalid Render');
  }

}, [count2]);


///////////////////////////////////////search21..................................
const searchItems = (searchValue) => {
setSearchInput(searchValue)
if (searchInput !== '') {
    const filteredData = petData.filter((item) => {
        return item.pet_type.includes(searchInput)
    })
    setFilteredResults(filteredData)
    setcount(count2 + 1)
}
else{
    setFilteredResults(petData)
    setcount(count2 + 1)
}
}





/////////////delete pet//////////////
async function deletPet(id) {
  console.log(id);
  try {
    const res = await superagent.delete(`${API}/pet/${id}`)
      .set('Authorization', 'Bearer ' + Context.token)
    const items = list.filter(item => item.id !== id);
    setPetData(items);
    setcount2(count2 + 1)
    console.log("items>>>>", items);
    console.log("delete", res);
  } catch (error) {
    alert('Invalid delete');
  }

}
///////////////update pet /////////////////////

const showupdatePetForm = async (index, item) => {

  setShowUpdateForm(true);

  setIndex(item.id);
  console.log(showUpdateForm, index);
  let obj = {
    pet_name: item.pet_name,
    pet_age: item.pet_age,
    pet_img: item.pet_img,
    pet_type: item.pet_type,
    pet_desc: item.pet_desc,
    pet_states: item.pet_states,
  }
  setUpdatePetData(obj)
}

const updatePet = async (e) => {
  e.preventDefault();
  let petFormData = {
    pet_name: e.target.pet_name.value,
    pet_age: e.target.pet_age.value,
    pet_img: e.target.pet_img.value,
    pet_type: e.target.pet_type.value,
    pet_desc: e.target.pet_desc.value,
    pet_states: e.target.pet_states.value,
  }

  let updateUrl = `${API}/pet/${index}`;
  let petDataRes = await superagent.put(updateUrl)
    .send(petFormData)
    .set('Authorization', 'Bearer ' + Context.token)
  setcount2(count2 + 1)

  console.log(petDataRes.text)
  setShowUpdateForm(false)
}


useEffect(async () => {
  try {
    console.log(Context.token, '>>>>>>>>>>>>>>>>>>..')
    const res = await superagent.get(`${API}/pet`)


    setPetData(res.body)

    console.log(res.body);
    console.log(',,,,,,,,,,,,,,,,,,,,,,', petData)
  } catch (error) {
    alert('Invalid Render');
  }

}, [count2]);
////////////////////add pet//////////////////////

async function addPet(item) {
  // console.log(item, ',,,,,,,,,,,,,,,,,,,,,,,,')


  let obj = {
    pet_name: item.pet_name,
    pet_age: item.pet_age,
    pet_img: item.pet_img,
    pet_type: item.pet_type,
    pet_desc: item.pet_desc,
    pet_states: item.pet_states,
  }
  try {
    console.log(Context.token)
    const res = await superagent.post(`${API}/adapt`)

      .send(obj)
      .set('Authorization', 'Bearer ' + Context.token)
    setcount(count2 + 1)

  } catch (error) {
    alert('Invalid data');
  }
}
//..........................pet functionality.............................................






return (
  <Router>
    <Header />
    
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
      <Route exact path="/Profile">
        <Profile
        delAppointmentfromuser={delAppointmentfromuser}
         list={list} />
      </Route>
      
      {/* <Route exact path="/login">
          <Login />
        </Route> */}
      <Route exact path="/login">
        {Context.loggedIn ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        {Context.loggedIn ? <Redirect to="/" /> : <SignUp />}
      </Route>
      <Route exact path="/Cart">
        <Cart />
      </Route>
    </Switch>
    {/* <When condition={!Context.loggedIn}>
        <Login />
      </When> */}
  </Router>


);
};

export default ToDo;
