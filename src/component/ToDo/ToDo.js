
// import React from 'react'
import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import List from '../list/list';
import Form from '../forms/forms';
import Headers from '../Header/header';
import "./ToDo.css"
import {LoginContext} from '../context/context'
import Auth from '../context/auth';
import SignUp from '../context/signUp';
import Appointment from '../Appointment/Appointment';
import superagent from "superagent"
import Header from "../Header/header";
import Home from "../home/home";
import AboutUS from "../aboutUS/aboutUS";
import Pets from "../pets/pets";
import Products from "../products/products";
import Services from "../services/services";
import LoginProvider from "../context/context";




//  class ToDo extends React.Component {

//   static  contextType = LoginContext;
  
//    constructor(props){
//      super(props)
//      this.state={
//     API : 'https://gold-team-mid-project.herokuapp.com',
//    list :[]

//      }
//    }

//    componentDidMount=async () => {
//         try {
//           const res = await superagent.get(`${this.state.API}/appointment`)
//           .set('Authorization', 'Bearer ' + this.context.token)
        
//             this.setState({
//               list:res.body
              
//              })
           
//             console.log(res.body);
//             console.log('..............',this.state.list)
//       } catch (error) {
//           alert('Invalid Render');
//       }
    
//       };
//   render() {
//     return (
    
//         <>
//       <Headers />

      

//         <Auth capability="show">
//           <Appointment list={this.state.list}/>
         
        
//         </Auth>
//         <SignUp />
//     </>
 
//     )
//   }
// }




const ToDo = (props) => {

  const API = 'https://gold-team-mid-project.herokuapp.com';
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
        user_id:item. user_id,
        book_date:item.book_date,
        book_time:item.book_time,
      }
    try {
      const res = await superagent.post(`${API}/newAppointment`)
      .send(obj)
      .set('Authorization', 'Bearer' + Context.token)
      setcount(count + 1)
  } catch (error) {
      alert('Invalid data');
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
      const res = await superagent.get(`${API}/appointment`)
      .set('Authorization', 'Bearer' + Context.token)
      
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
       {/* <SignUp />
    
       <Auth capability="show">
         <Appointment list={list}/>
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
          <Services />
        </Route>
        <Route exact path="/AboutUS">
          <AboutUS />
        </Route>
      </Switch>
      {/* <When condition={!this.context.loggedIn}>
        <Login />
      </When> */}
    </Router>
  );

    }

export default ToDo;