// import React from 'react'
import React, { useEffect, useState, useContext, Profiler } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import List from "../list/list";
import Headers from "../Header/header";
import "./ToDo.css";
import { LoginContext } from "../context/context";
import Auth from "../context/auth";
import Appointment from "../Appointment/Appointment";
import SignUp from "../context/signUp";
import Form from "../forms/forms";
import superagent from "superagent";
import { When } from "react-if";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import Header from "../Header/header";
import Home from "../home/home";
import AboutUS from "../aboutUS/aboutUS";
import Pets from "../pets/pets";
import Product from "../products/products";
import Services from "../services/services";
import LoginProvider from "../context/context";
import Login from "../context/login";
import Cart from "../cart/cart";
import Profile from "../Profile/profile";
import UpdatePetForm from "../forms/updatePet";
import Footer from "../footer/footer";
import UpdateforimProduct from "../forms/updateforimProduct";
import Message from "../socket/message";
import MyMessageArea from "../socket/MyMessageArea";


const ToDo = (props) => {
  const API = "http://localhost:3005";
  const Context = useContext(LoginContext);

  const [messageArea, setmessageArea] = useState(false);

  const [list, setList] = useState([]);
  const [count, setcount] = useState(0);
  const [incomplete, setIncomplete] = useState([]);
  //.................pet states...............................................
  const [petData, setPetData] = useState([]);
  const [updatePetData, setUpdatePetData] = useState();
  const [count2, setcount2] = useState(0);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [index, setIndex] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  //.................product states...............................................
  const [productData, setproductData] = useState([]);
  const [updateproductData, setUpdateProductData] = useState();
  const [count3, setcount3] = useState(0);
  const [Indexproduct, setIndexproduct] = useState();
  const [showUpdateFormproduct, setshowUpdateFormproduct] = useState(false);
  const [productsearch, setproductsearch] = useState("");
  const [filterprouduct, setfilterprouduct] = useState([]);
  //..................product status...........................................

  //............................productFunctionality........................................
  //add Appointment function
  async function addAppointment(item) {
    console.log(item, ",,,,,,,,,,,,,,,,,,,,,,,,");
    let obj = {
      book_userid: Context.user.id,
      book_doctor: item.book_doctor,
      book_states: item.book_states,
      user_id: item.user_id,
      // book_date:item.book_date,
      book_time: item.book_time,
    };
    try {
      console.log(Context.token);
      const res = await superagent
        .post(`${API}/newAppointment`)
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount(count + 1);
    } catch (error) {
      alert("Invalid data");
    }
  }
  //delete function
  async function delAppointment(id) {
    console.log(id);
    try {
      const res = await superagent
        .delete(`${API}/appointment/${id}`)
        .set("Authorization", "Bearer " + Context.token);
      const items = list.filter((item) => item.id !== id);
      setList(items);
      console.log("items>>>>", items);
      console.log("delete", res);
      setcount(count + 1);
    } catch (error) {
      alert("Invalid delete");
    }
  }
  //update state function to book Appointment📑
  async function updateAppointment(item) {
    let obj = {
      book_userid: Context.user.id,
      book_doctor: item.book_doctor,
      book_states: !item.book_states,
      user_id: item.user_id,
      book_time: item.book_time,
    };
    try {
      const res = await superagent
        .put(`${API}/book/${item.id}`)
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount(count + 1);
    } catch (error) {
      alert("Invalid update");
    }
    //update state function
  }
  //function to cancel  booking
  async function delAppointmentfromuser(item) {
    let obj = {
      book_userid: Context.user.id,
      book_doctor: item.book_doctor,
      book_states: !item.book_states,
      user_id: item.user_id,
      book_time: item.book_time,
    };
    try {
      const res = await superagent
        .put(`${API}/bookfromuser/${item.id}`)
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount(count + 1);
    } catch (error) {
      alert("Invalid update");
    }
  }
  useEffect(async () => {
    try {
      console.log(Context.token, ">>>>>>>>>>>>>>>>>>..");
      const res = await superagent
        .get(`${API}/appointment`)
        .set("Authorization", "Bearer " + Context.token);
      console.log(res, "xxxxxxxxxxxxxxxxxxxxxxxx..");
      setList(res.body);
      console.log(res.body);
      console.log("..............", list);
    } catch (error) {
      alert("Invalid Render");
    }
  }, [count]);
  //..........................pet functionality.............................................
  ////get pets data /////////////////////
  useEffect(async () => {
    try {
      console.log(Context.token, ">>>>>>>>>>>>>>>>>>..");
      const res = await superagent.get(`${API}/pet`);
      setPetData(res.body);
      console.log(res.body);
      console.log("..............", petData);
    } catch (error) {
      alert("Invalid Render");
    }
  }, [count2]);
  ///////////////////////////////////////search21..................................
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = petData.filter((item) => {
        return item.pet_type.includes(searchInput);
      });
      setFilteredResults(filteredData);
      setcount2(count2 + 1);
    } else {
      setFilteredResults(petData);
      setcount2(count2 + 1);
    }
  };
  //..................................search product.................................
  const searchItems2 = (searchValue) => {
    setproductsearch(searchValue);
    console.log(productsearch, "jjjjjjjjjjjjjjjjjjjjjjjj");
    if (productsearch !== "") {
      const filteredData2 = productData.filter((item) => {
        return item.product_type.includes(productsearch);
      });
      console.log("llllllllllllllllllllllllll", filteredData2);
      setfilterprouduct(filteredData2);
      setcount3(count3 + 1);
    } else {
      setfilterprouduct(productData);
      setcount3(count3 + 1);
    }
  };
  /////////////delete pet//////////////
  async function deletPet(id) {
    console.log(id);
    try {
      const res = await superagent
        .delete(`${API}/pet/${id}`)
        .set("Authorization", "Bearer " + Context.token);
      const items = list.filter((item) => item.id !== id);
      setPetData(items);
      setcount2(count2 + 1);
      console.log("items>>>>", items);
      console.log("delete", res);

      Swal.fire({
        icon: "success",
        text: "Pet Successfully Deleted ",
        showCancelButton: false,
        confirmButtonText: 'Ok',

      })

    } catch (error) {
      Swal.fire({
        icon: "warning",
        text: "Somthing went wrong",
        showCancelButton: false,
        confirmButtonText: 'Ok',

      })
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
    };
    setUpdatePetData(obj);
  };
  const updatePet = async (e) => {
    e.preventDefault();
    let petFormData = {
      pet_name: e.target.pet_name.value,
      pet_age: e.target.pet_age.value,
      pet_img: e.target.pet_img.value,
      pet_type: e.target.pet_type.value,
      pet_desc: e.target.pet_desc.value,

    };
    let updateUrl = `${API}/pet/${index}`;
    let petDataRes = await superagent
      .put(updateUrl)
      .send(petFormData)
      .set("Authorization", "Bearer " + Context.token);
    setcount2(count2 + 1);
    console.log(petDataRes.text);
    setShowUpdateForm(false);
  };
  //..................................useeffect to product............................
  useEffect(async () => {
    console.log(" use effect product ????????????");
    try {
      const ress = await superagent
        .get(`${API}/products`)
        .set("Authorization", "Bearer " + Context.token);
      console.log(ress, "xxxxxxxxxxproduct");
      setproductData(ress.body);
      console.log(ress.body);
    } catch (error) {
      alert("Invalid Render");
    }
  }, [count3]);
  ////////////////////////////////////
  useEffect(async () => {
    try {
      const res = await superagent.get(`${API}/pet`);
      setPetData(res.body);

    } catch (error) {
      alert("Invalid Render");
    }
  }, [count2]);
  ////////////////////Socket Io ///////////////////
  function myMessageFunc() {
    setmessageArea(true)
    console.log('set It');
  }

  function removeMessageFunc() {
    setmessageArea(false)
  }
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
    };
    try {
      const res = await superagent
        .post(`${API}/adapt`)
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount2(count2 + 1);
    } catch (error) {
      alert("Invalid data");
    }
  }

  async function acceptAdoption(id) {
    // "/adoptionpet/:id",
    const res = await superagent
      .put(`${API}/adoptionpet/${id}`)
      .set("Authorization", "Bearer " + Context.token);

    setcount(count2 + 1);
  }

  async function declineAdoption(item) {

    // put(
    // "/pet/:id",

    let obj = item
    obj.user_id = null
    obj.pet_states = true
    obj.requestId = null

    const id = obj.id

    const res = await superagent
      .put(`${API}/pet/${id}`)
      .send(obj)
      .set("Authorization", "Bearer " + Context.token);

    setcount(count2 + 1);
  }

  async function alertForAdoption(id) {
    //  "/adoptionpetUser/:id/:requestId",
    //   state = false 
    //   id = null
    const userId = Context.user.id // from logIn
    console.log(Context.user.id);
    const petId = id

    console.log(petId);

    // SuperAgent

    const res = await superagent
      .put(`${API}/adoptionpetUser/${petId}/${userId}`)
      .set("Authorization", "Bearer " + Context.token);

    setcount(count2 + 1);
    console.log(res);

    //   capability="add" && state=false  &&  id=null {requestedId=12}


    Swal.fire({
      icon: "info",
      text: "You should take the approvment from admin 🐾🐾",
      showCancelButton: false,
      confirmButtonText: 'Ok',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.reload()
      }
    })

  }

  // async function updatePetState(index, item) {
  //   // by admin
  //   let obj = {
  //     pet_q: Context.user.id, // user id who pick pet
  //     pet_name: item.pet_name,
  //     pet_states: !item.pet_states, // false
  //     pet_age: item.pet_age,
  //     pet_img: item.pet_img,
  //     pet_type: item.pet_type,
  //     pet_desc: item.pet_desc,
  //     user_id: item.user_id, // admin id who add pet
  //   };
  //   console.log(obj, '>>>>>>>>>>>>>>>>>>>>>');
  //   try {
  //     const res = await superagent
  //       .put(`${API}/adoptionpet/${item.id}`)
  //       .send(obj)
  //       .set("Authorization", "Bearer " + Context.token);

  //     setcount(count2 + 1);
  //   } catch (error) {
  //     alert("Invalid update");
  //   }
  // }

  //..........................pet functionality.............................................
  //.....................................add product.....................
  async function addProduct(item) {
    // console.log(item, ',,,,,,,,,,,,,,,,,,,,,,,,')
    let obj = {
      product_name: item.product_name,
      product_img: item.product_img,
      product_desc: item.product_desc,
      product_type: item.product_type,
      product_price: item.product_price,
      user_id: item.user_id, //??????????????????????
    };

    try {
      const res = await superagent
        .post(`${API}/product`) ///????????????????????
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount3(count3 + 1);
    } catch (error) {
      alert("Invalid data");
    }

  }
  //.....................................add product.....................
  //............................................updateProduct.............................
  const updateProduct = async (e) => {
    console.log("ggggggggggggggggggggggggggggggggggggg", productData);
    console.log("klllllllllllllllllll", Indexproduct);


    e.preventDefault();
    let productFormData = {
      product_name: e.target.product_name.value,
      product_desc: e.target.product_desc.value,
      product_type: e.target.product_type.value,
      product_price: e.target.product_price.value,
      product_img: e.target.product_img.value,
      user_id: e.target.user_id.value,
    };
    console.log("lllllllllllllllllllllll", updateproductData);
    let updateUrl = `${API}/product/${Indexproduct}`;
    let productDataRes = await superagent
      .put(updateUrl)
      .send(productFormData)
      .set("Authorization", "Bearer " + Context.token);
    setcount3(count3 + 1);
    setshowUpdateFormproduct(false);
  };
  const showupdateProductForm = async (index, item) => {
    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj,item", item);
    setshowUpdateFormproduct(true);
    console.log("ggggggggggggggggggnnnnnnn", showUpdateFormproduct);
    setIndexproduct(item.id);

    let obj = {
      product_name: item.product_name,
      product_desc: item.product_desc,
      product_type: item.product_type,
      product_price: item.product_price,
      product_img: item.product_img,
      user_id: item.user_id,
    };
    setUpdateProductData(obj);
  };
  //..............................delete product......................................................
  async function deletProduct(id) {
    console.log(id);
    try {
      const res = await superagent
        .delete(`${API}/products/${id}`)
        .set("Authorization", "Bearer " + Context.token);
      const items = list.filter((item) => item.id !== id);
      setproductData(items);
      setcount3(count3 + 1);
      console.log("items>>>>", items);
      console.log("delete", res);
    } catch (error) {
      alert("Invalid delete");
    }
  }
  //............................................updateProduct.............................
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Pets">
            <Pets
              searchItems={searchItems}
              filteredResults={filteredResults}
              searchInput={searchInput}
              petData={petData}
              deletPet={deletPet}
              showupdatePetForm={showupdatePetForm}
              addPet={addPet}
              search={searchItems}
              alertForAdoption={alertForAdoption}
            // updatePetState={updatePetState}
            />
            {showUpdateForm && (
              <UpdatePetForm
                updatePet={updatePet}
                updatePetData={updatePetData}
              />
            )}
          </Route>
          <Route exact path="/Products">
            <Product
              filterprouduct={filterprouduct}
              productsearch={productsearch}
              searchItems2={searchItems2}
              deletProduct={deletProduct}
              productData={productData}
              addProduct={addProduct}
              showupdateProductForm={showupdateProductForm}
            />
            {showUpdateFormproduct && (
              <UpdateforimProduct
                updateProduct={updateProduct}
                updateproductData={updateproductData}
              />
            )}
          </Route>
          <Route exact path="/Services">
            <Services
              list={list}
              addAppointment={addAppointment}
              delAppointment={delAppointment}
              updateAppointment={updateAppointment}
            />
          </Route>
          <Route exact path="/AboutUS">
            <AboutUS />
          </Route>
          <Route exact path="/Profile">
            <Profile
              acceptAdoption={acceptAdoption}
              declineAdoption={declineAdoption}
              delAppointmentfromuser={delAppointmentfromuser}
              list={list}
              petData={petData}
            />
          </Route>

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

        {/* <Footer /> */}
      </Router>

      {
        !messageArea &&
        (Context.loggedIn &&
          <Message myMessageFunc={myMessageFunc} />)
      }

      {
        messageArea &&
        <MyMessageArea removeMessageFunc={removeMessageFunc} />
      }

    </>
  );
};
export default ToDo;