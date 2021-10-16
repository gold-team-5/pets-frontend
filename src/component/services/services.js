import React from "react";
import Auth from '../context/auth';
import Appointment from '../Appointment/Appointment';
import Form from '../forms/forms';
export default function Services(props) {
  return (
   <>
     <Auth capability="show">
         <Appointment list={props.list}
         delAppointment={props.delAppointment}
         updateAppointment={props.updateAppointment}
         
         />
           <Form addAppointment={props.addAppointment} />
         
        
         </Auth>
</>
    )
    


}
