import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap/";
import "./profile.css";
import { LoginContext } from "../context/context";
// import Auth from "./component/context/auth";
import Auth from "../context/auth";

export default function Profile(props) {
  console.log("mmmmmmm", props.list);
  const context = useContext(LoginContext);
  return (
    // {context.userinfo}
    <>
      <Card className="card cardProfile">
        {/* .......... user info ................. */}
        <Card.Img
          className="cardName "
          variant="top"
          src={context.user.user_img}
        />{" "}
        <Card.Title className="title">{context.user.user_name}</Card.Title>
        <Card.Body className="infoContener">
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
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
        {/* .......... booking ................. */}
        <div id="bookingListTilt">
          <div id="bookingTitle">your booking</div>
          {props?.list?.map((item) => {
            if (
              item.book_states == false &&
              item.book_userid == context.user.id
            ) {
              return (
                <div id="booking">
                  {/* <p>{item.id}</p>
                {console.log(item.id, "hhhhhhhhhhhhhhhhhhhhhhhhh")} */}

                  <ListGroupItem>
                    ID: {item.id} &nbsp; Doctor: {item.book_doctor}
                  </ListGroupItem>
                  {/* <ListGroupItem>Doctor Name: {item.book_doctor}</ListGroupItem> */}
                  {/* <ListGroupItem>{item.user_id}</ListGroupItem> */}
                  <ListGroupItem>
                    On Time: {item.book_time}{" "}
                    <Auth capability="show">
                      <td>
                        {" "}
                        <Button
                          onClick={() => props.delAppointmentfromuser(item)}
                          type="button"
                          variant="danger"
                        >
                          ❌
                        </Button>
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
      </Card>
    </>
  );
}
