import react from 'react'
import { Table, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../context/auth';
const Appointment = (props) => {
  return (

    <>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book Doctor</th>
            <th>User Name</th>
            <th>Date</th>
            <th>Book States</th>
            <th>booking</th>
            <Auth capability="add"> <th>Delete</th></Auth>
          </tr>
        </thead>
        {props?.list?.map(item => {
          if (item.book_states == true) {
            return (
              <tbody key={item.id} >
                <tr>
                  <td>{item.id}</td>
                  <td>{item.book_doctor}</td>
                  <td>{item.user_id}</td>
                  <td>{item.book_time}</td>
                  <td>  {item.book_states.toString()}</td>
                  {/* this button to admin */}

                  <td><Button onClick={() => props.updateAppointment(item)} type="button"  >Booking</Button></td>
                  <Auth capability="add">
                  <td> <Button onClick={() => props.delAppointment(item.id)} type="button" variant="danger" >Delete</Button></td>
                  </Auth>


                </tr>


              </tbody>

            )
          }
        })}
      </Table>



    </>
  )
}
export default Appointment