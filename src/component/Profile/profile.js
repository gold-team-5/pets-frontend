import React, { useContext, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap/";
import '../../reset.css';
import "./profile.css";
import img from '../../img/profile.png';
import { LoginContext } from "../context/context";
// import Auth from "./component/context/auth";
import Auth from "../context/auth";
import superagent from "superagent";

export default function Profile(props) {
  console.log("mmmmmmm", props.list);
  const context = useContext(LoginContext);

  const Context = useContext(LoginContext);

  console.log(context.user);

  return (

    // {context.userinfo}
    < div className='all'>
      <img id="profileIMG" src={img} alt="img2" />
      <Card className="cardProfile">
        {/* .......... user info ................. */}
        <div className='imgandname'>
          <Card.Img
            className="cardimg "
            variant="top"
            src={context.user.user_img}
          />{" "}
          <Card.Title className="titlename">{context.user.user_name}</Card.Title>

        </div>
        <div className="infoContener">
          <Card.Body >
            <Card.Title className="info">
              📧 :{context.user.user_email}
            </Card.Title>
            <Card.Title className="info">
              🏠 : {context.user.user_address}
            </Card.Title>
            <Card.Title className="info">
              📞 : {context.user.user_phone}
            </Card.Title>
          </Card.Body>



        </div>
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}

        <div className='bookandanimale'>
          {/* .......... booking ................. */}
          <div className="bookingListTilt yourbookingdiv">
            <div id="bookingTitle">your booking</div>
            {props?.list?.map((item) => {
              if (
                item.book_states == false &&
                item.book_userid == context.user.id
              ) {
                return (
                  <div className='boxbooking'>
                    {/* <p>{item.id}</p>
                {console.log(item.id, "hhhhhhhhhhhhhhhhhhhhhhhhh")} */}

                    <ListGroupItem >
                      {/* ID: {item.id}  */}
                      &nbsp; Doctor: {item.book_doctor}
                    </ListGroupItem>
                    {/* <ListGroupItem>Doctor Name: {item.book_doctor}</ListGroupItem> */}
                    {/* <ListGroupItem>{item.user_id}</ListGroupItem> */}
                    <ListGroupItem  >
                      On Time: {item.book_time}{" "}
                      <Auth capability="show">
                        <td>
                          {" "}
                          <button
                            className="btnboking"
                            onClick={() => props.delAppointmentfromuser(item)}
                            type="button"
                            variant="danger"
                          >
                            ❌
                          </button>
                        </td>
                      </Auth>
                    </ListGroupItem>

                  </div>

                );
              }
            })}
          </div>
          <Auth capability="add">
            {/* //   capability="add" && state=false  &&  id=null {requestedId=12} */}

            <div className="petData">
              <div id='petTitle'> Pets need Approvement </div>
              {props.petData?.map((item) => {
                if (item.pet_states == false && item.user_id == null) {
                  return (
                    <div className="adoptPet">
                      <ListGroupItem>
                        <img src={item.pet_img} style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
                      </ListGroupItem>

                      <ListGroupItem>
                        {/* ID: {item.id}  */}
                        &nbsp;  AGE: {item.pet_age}
                      </ListGroupItem>
                      <ListGroupItem>
                         Name: {item.pet_name} &nbsp;  Type: {item.pet_type}
                      </ListGroupItem>


                      <button className="btnpetsData" onClick={() => props.acceptAdoption(item.id)}> Accept </button>

                      <button variant="danger" className="btnpetsData" onClick={() => props.declineAdoption(item)}> Decline </button>

                    </div>
                  )
                }
              })}
            </div>
          </Auth>

          <div className="petData">
          <div id='petTitle'>your pets</div>
            {props?.petData?.map((item) => {
              if (item.pet_states == false &&
                item.user_id == context.user.id) {
                return (
                  <div className="adoptPet">
                  

                    <ListGroupItem>
                      {/* ID: {item.id}  */}
                      &nbsp; PET AGE: {item.pet_age}
                    </ListGroupItem>
                    <ListGroupItem>
                      Pet Name: {item.pet_name} &nbsp; Pet Type: {item.pet_type}
                    </ListGroupItem>
                    <ListGroupItem>
                      <img src={item.pet_img} style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
                    </ListGroupItem>


                  </div>
                )
              }
            })}
          </div>

        </div>
      </Card>
    </div>
  );
}
