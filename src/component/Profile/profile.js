import React,{useContext} from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap/'
import   './profile.css'
import { LoginContext } from "../context/context";

export default function Profile(props) {
  console.log('mmmmmmm',props.list)
  const context = useContext(LoginContext);
    return (
        // {context.userinfo}
           <>
          {/* <Card className="card" >
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

  
</Card> */}


{props?.list?.map(item => {
          if ( item.book_states == false &&  item.book_userid == context.user.id  ) {
            return (
             <>
             <p>{item.id}</p>
             {console.log(item.id,"hhhhhhhhhhhhhhhhhhhhhhhhh")}
{/*                
                  <ListGroupItem>{item.id}</ListGroupItem>
                  <ListGroupItem>{item.book_doctor}</ListGroupItem>
                  <ListGroupItem>{item.user_id}</ListGroupItem>
                  <ListGroupItem>{item.book_time}</ListGroupItem>
                  <ListGroupItem>  {item.book_states.toString()}</ListGroupItem>
                  {/* this button to admin */}

               
                  {/* <Auth capability="show"> */}
                  {/* <td> <Button onClick={() => props.delAppointmentfromuser(item)} type="button" variant="danger" >Delete</Button></td>
                  </Auth> */} 


              
</>
              

            )
          }
        })}
  

          
           </> 
        
    )
}
