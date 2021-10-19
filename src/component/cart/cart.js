import React, { useContext, useEffect, useState } from "react";
import { FormGroup, InputGroup, Icon, Button } from "@blueprintjs/core";
import Form from "react-bootstrap/Form";
import "./cart.css";
import img2 from "../../img/istockphoto-1152482732-612x612-removebg-preview.png";

import { LoginContext } from "../context/context";
import Auth from "../context/auth";
import Swal from "sweetalert2";

import superagent from "superagent";
const API = "https://pets-mid-pro.herokuapp.com";

export default function Pets(props) {
  let sumatiom = 0;

  const Context = useContext(LoginContext);

  const [count, setcount] = useState(0);

  console.log(props.productData);
  let newCount = 1;

  function alertForBuy() {
    Swal.fire({
      icon: "success",
      // title: " Done ✔ ",
      // showCancelButton: false,
      text: "Done ✔ ",
    });
  }

  async function handelAdd(index, item) {
    /////////////////// + /////////////////////

    console.log(index);
    {
      props?.productData?.map((ele, i) => {
        if (index == ele.id) {
          newCount = ele.product_quantity + 1;
          console.log("....................", newCount);

          return (ele.product_quantity += 1);
        }
      });
    }

    setcount(count + 1);

    /////////////////// req /////////////////////

    let obj = {
      product_userID: Context.user.id, // id >> user
      id: item.id, // id >> prodect
      product_name: item.product_name,
      product_desc: item.product_desc,
      product_img: item.product_img,
      product_price: item.product_price,
      product_type: item.product_type,
      product_quantity: newCount,
      // user_id: item.user_id,
    };

    try {
      const res = await superagent
        .put(`${API}/product/${item.id}`)
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount(count + 1);
      console.log(res.text);
    } catch (error) {
      alert("Invalid update");
    }
  }

  async function handelDecrese(index, item) {
    /////////////////// - /////////////////////

    console.log(index);
    {
      props?.productData?.map((ele, i) => {
        if (index == ele.id && ele.product_quantity > 0) {
          newCount = ele.product_quantity - 1;
          console.log("....................", newCount);

          return (ele.product_quantity -= 1);
        }
      });
    }

    setcount(count - 1);

    /////////////////// req /////////////////////

    let obj = {
      product_userID: Context.user.id, // id >> user
      id: item.id, // id >> prodect
      product_name: item.product_name,
      product_desc: item.product_desc,
      product_img: item.product_img,
      product_price: item.product_price,
      product_type: item.product_type,
      product_quantity: newCount,
      // user_id: item.user_id,
    };

    try {
      const res = await superagent
        .put(`${API}/product/${item.id}`)
        .send(obj)
        .set("Authorization", "Bearer " + Context.token);
      setcount(count + 1);
      console.log(res.text);
    } catch (error) {
      alert("Invalid update");
    }
  }

  return (
    <div id="contener">
      <div id="iner-contener">
        <h2 contenteditable="true">shopping cart </h2>
        <img id="petsIMG" src={img2} alt="img2" />
      </div>

      <div id="cart">
        <div id="left">
          {/* list   */}

          {/* <span>your prodectes</span> */}

          {/* ///////////////////////////////// */}
          {useEffect(async () => {
            try {
              console.log("gfdsghdshetdgvsdghbtshgsdf");
            } catch (error) {
              alert("Invalid Render");
            }
          }, [count])}
          {/* ///////////////////////////////// */}

          {props?.productData?.map((ele, i) => {
            if (ele.product_userID == Context.user.id) {
              sumatiom =
                sumatiom + Number(ele.product_price) * ele.product_quantity;

              console.log(sumatiom);
              return (
                <>
                  <div key={i} className="prodectContener">
                    {/* /// */}
                    {/* ///// */}

                    <img src={ele.product_img} alt="prodect" id="imgLIst" />
                    <div className="paragrafs">
                      <p>Name: {ele.product_name} </p>{" "}
                    </div>

                    <div className="paragrafs">
                      {" "}
                      <p>Price: {ele.product_price} </p>
                    </div>
                    <div id="buttons ">
                      <button
                        className="mainac buttonss"
                        onClick={() => handelDecrese(ele.id, ele)}
                      >
                        ➖
                      </button>
                      &nbsp;
                      <span>{ele.product_quantity}</span>
                      &nbsp;
                      <button
                        className="plus buttonss"
                        onClick={() => handelAdd(ele.id, ele)}
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              );
            }
          })}
          {/* {settotal(total + sumatiom)} */}
          <div id="total">Total: {sumatiom}</div>
        </div>

        <div id="right">
          {/* form   */}

          <span> Your Info</span>
          <Form onSubmit={alertForBuy}>
            <FormGroup
              className="FormGroup"
              // helperText="Helper text with details..."
              // label="Label A"
              // // labelFor="text-input"
              labelInfo="(required)"
            >
              <InputGroup
                required="required"
                id="text-input"
                className="InputGroup"
                placeholder="your name"
              />
            </FormGroup>

            <FormGroup className="FormGroup" labelInfo="(required)">
              <InputGroup
                required="required"
                id="text-input"
                className="InputGroup"
                placeholder="location"
              />
            </FormGroup>
            <FormGroup className="FormGroup" labelInfo="(required)">
              <InputGroup
                required="required"
                id="text-input"
                className="InputGroup"
                placeholder="phone"
              />
            </FormGroup>
            <FormGroup className="FormGroup" labelInfo="(required)">
              <Button type="submit" id="GoBtn">
                {" "}
                Go ✔{" "}
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
