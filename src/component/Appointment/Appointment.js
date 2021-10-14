import react from 'react'
import {Table,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
const Appointment=(props)=>{
  return(

  <>
 
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>ID</th>
      <th>Book Doctor</th>
      <th>User Name</th>
      <th>Date</th>
      <th>Book States</th>
      <th>Delete</th>
    </tr>
  </thead>
  {props?.list?.map(item=>(
  <tbody>
    <tr>
      <td>{item.id}</td>
      <td>{item.book_doctor}</td>
      <td>{item.user_id}</td>
      <td>{item.book_date}</td>
     <td> <Button type="button" intent={item.book_states ? 'success' : 'danger'} > {item.book_states.toString()}</Button></td>
{/* this button to admin */}
     <td> <Button type="button" variant="danger">Delete</Button></td>
     
                  
    </tr>
    
    
  </tbody>
  ))} 
  </Table>



    </>
  )
}
export default Appointment