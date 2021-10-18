import React,{useContext} from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap/'
import   './profile.css'
import { LoginContext } from "../context/context";

export default function Profile(props) {
  console.log(props.list)
  const context = useContext(LoginContext);
    return (
        // {context.userinfo}
           <>
          <Card className="card" >
  <Card.Img  className="cardName"variant="top" src="https://i.pinimg.com/564x/60/60/5e/60605e55a8b6ba8987aea2e9e046d13f.jpg" />
  <Card.Title className="title">{context.user.user_name}</Card.Title>
  <Card.Body>
   
    <Card.Title className="info">
     Address: {context.user.user_address}
    </Card.Title>
    <Card.Title className="info">
     phone: {context.user.user_phone}
    </Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
          
           </> 
        
    )
}
