import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap/";
import '../../reset.css';
import "./profile.css";
import { LoginContext } from "../context/context";
// import Auth from "./component/context/auth";
import Auth from "../context/auth";

export default function Profile(props) {
  console.log("mmmmmmm", props.list);
  const context = useContext(LoginContext);
  return (
    // {context.userinfo}
    < div className='all'>
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
        <div  className="infoContener">
        <Card.Body >
          <Card.Title className="info">
            Email: {context.user.user_email}
          </Card.Title>
          <Card.Title className="info">
            Address: {context.user.user_address}
          </Card.Title>
          <Card.Title className="info">
            phone: {context.user.user_phone}
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
                    ID: {item.id} &nbsp; Doctor: {item.book_doctor}
                  </ListGroupItem>
                  {/* <ListGroupItem>Doctor Name: {item.book_doctor}</ListGroupItem> */}
                  {/* <ListGroupItem>{item.user_id}</ListGroupItem> */}
                  <ListGroupItem  >
                    On Time: {item.book_time}{" "}
                    <Auth capability="show">
                      <td>
                        {" "}
                        <button
                          onClick={() => props.delAppointmentfromuser(item)}
                          type="button"
                          variant="danger"
                        >
                          ❌
                        </button>
                      </td>
                    </Auth>
                  </ListGroupItem>
                  {/* <ListGroupItem> {item.book_states.toString()}</ListGroupItem> */}

                  {/* <Auth capability="show">
                  <td>
                    {" "}
                    <Button
                      onClick={() => props.delAppointmentfromuser(item)}
                      type="button"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </Auth> */}
                </div>
              );
            }
          })}
        </div>





        <div className="petData">
          {props?.petData?.map((item) => {
            if (item.pet_states == false &&
              item.pet_q == context.user.id) {
              return (
                <div className="adoptPet">
                  <div id='petTitle'>your pets</div>
                  
                  <ListGroupItem>
                    ID: {item.id} &nbsp; PET AGE: {item.pet_age}
                  </ListGroupItem>
                  <ListGroupItem>
                    Pet Name: {item.pet_name} &nbsp; Pet Type: {item.pet_type}
                  </ListGroupItem>
                  <ListGroupItem>
                  <img src={item.pet_img} style={{width:'100px',height:'100px', borderRadius:'50%'}}></img>
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
