import React,{useContext} from "react";
import Auth from '../context/auth';
import Appointment from '../Appointment/Appointment';
import Form from '../forms/forms';
import ProfileProvider from "../context/contextprofile";
export default function Services(props) {
  const context = useContext(ProfileProvider)

  console.log(context.list)
  return (
   <>
   console.log()
     {/* <Auth capability="show">
         <Appointment list={context.list}
         delAppointment={context.delAppointment}
         updateAppointment={context.updateAppointment}
         
         />
           <Form addAppointment={context.addAppointment} /> */}
         
        
         {/* </Auth> */}
</>
    )
    


}
