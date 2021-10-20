import react from 'react'
import { Table, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../context/auth';
import './Appointment.css'
import { AiOutlineCalendar } from "react-icons/ai";

const Appointment = (props) => {
  console.log(',,,,,,,,,,,,,,,,,,,,,', props.list)
  return (

    <>
      <div className="">
        <h2 id="h2" className="Appointments">Appointments</h2>
        <div className="tableandtext">

          {/* <div className="imgandp">
    <img   className="imgapp"src="https://i.pinimg.com/564x/87/5a/1e/875a1e2ac1f52f250cbfb386ee0d732b.jpg" alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum facere expedita non voluptas numquam nostrum molestiae! Quo natus expedita incidunt sequi, error culpa harum sit, autem esse enim optio.</p>
  </div> */}
          <table className="tableApp" striped bordered hover variant="">
            <thead className="tableAppth">
              <tr className="tableAppth">
                <th>ID</th>
                <th> Doctor</th>

                <th>Date</th>

                <th>booking</th>
                <Auth capability="add"> <th>Delete</th></Auth>
              </tr>
            </thead>
            <tbody className="bodytable"  >
              {props?.list?.map(item => {
                if (item.book_states == true) {
                  return (

                    <tr>
                      <td>{item.id}</td>

                      <td>{item.book_doctor}</td>
                      <td>{item.book_time}</td>

                      {/* this button to admin */}

                      <td><button className="appbtn appbtn1" onClick={() => props.updateAppointment(item)} type="button"  ><AiOutlineCalendar /> ✔</button></td>
                      <Auth capability="add">
                        <td> <button className="appbtn appbtn2" onClick={() => props.delAppointment(item.id)} type="button" variant="danger" >❌</button></td>
                      </Auth>


                    </tr>




                  )
                }
              })}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
export default Appointment