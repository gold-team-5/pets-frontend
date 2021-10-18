import React, { useEffect, useState ,useContext} from "react";
import superagent from "superagent";
import { LoginContext } from './context'
const API = 'http://localhost:3001';// .env
//create context
export const ProfileContext = React.createContext();


//set state

//initialState to reducer
// const initialState = {
//     bookdata: []
// }


//function reducer 
// function reducer(state, action) {
//     switch (action.type) {
//         case 'update':
//             return {

//                 ...state,
//                 bookdata: [...state.bookdata, action.payload]


//             };
//         default:
//             return state;
//     }

// }
// function to send 
// function bookfunction(info) {


//     return {
//         type: 'update',
//         payload: { info }
//     }

// }

export default function ProfileProvider(props) {
 const Context = useContext(LoginContext)
 const [list, setList] = useState([]);
const [count, setcount] = useState(0);
//  const [state, dispatch] = useReducer(reducer, initialState)

    // /add Appointment function
    async function addAppointment(item) {
        console.log(item, ',,,,,,,,,,,,,,,,,,,,,,,,')


        let obj = {
            book_doctor: item.book_doctor,
            book_states: item.book_states,
            user_id: item.user_id,
            // book_date:item.book_date,
            book_time: item.book_time,
        }
        try {
            console.log(Context.token)
            const res = await superagent.post(`${API}/newAppointment`)

                .send(obj)
                .set('Authorization', 'Bearer ' + Context.token)
            setcount(count + 1)

        } catch (error) {
            alert('Invalid data');
        }
    }


    //delete function
    async function delAppointment(id) {
        console.log(id);
        try {
            const res = await superagent.delete(`${API}/appointment/${id}`)
                .set('Authorization', 'Bearer ' + Context.token)
            const items = list.filter(item => item.id !== id);
            setList(items);
            console.log("items>>>>", items);
            console.log("delete", res);
            setcount(count + 1)
        } catch (error) {
            alert('Invalid delete');
        }

    }
    //update state function 

    async function updateAppointment(item) {
        console.log(Context.user.id,">>>>>>>>>")
          let obj = {
            //user id to book Appointment
             book_userid:Context.user.id,
            book_doctor: item.book_doctor,
          
            book_states: !item.book_states,
              //admin id
            user_id: item.user_id,
            book_time: item.book_time,
          }
          
          
          
          
        
          try {
        
            const res = await superagent.put(`${API}/book/${item.id}`)
              .send(obj)
              .set('Authorization', 'Bearer ' + Context.token)
              //dispatch to store bookdata
            // dispatch(bookfunction(res.body));
          console.log(state.bookdata,'ggggggggggggggggggg')
        
          console.log(state.bookdata.info.id,'jjjjjjjjjjjjjjjjjjjjjjjjj')
        
        
        
            setcount(count + 1)
          } catch (error) {
            alert('Invalid update');
          }
        
        }
        
        
        
        useEffect(async () => {

            try {
                console.log(Context.token, '>>>>>>>>>>>>>>>>>>..')
                const res = await superagent.get(`${API}/appointment`)
                    .set('Authorization', 'Bearer ' + Context.token)
                console.log(res, 'xxxxxxxxxxxxxxxxxxxxxxxx..')

                setList(res.body)

                console.log(res.body);
                console.log('..............', list)
            } catch (error) {
                alert('Invalid Render');
            }

        }, [count]);





    const state = {
        list,
        updateAppointment,
        addAppointment,
        delAppointment,
    //    { state.bookdata}
        

    }



    return (
        <ProfileContext.Provider value={state}>
            {props.children}
        </ProfileContext.Provider>
    )
}