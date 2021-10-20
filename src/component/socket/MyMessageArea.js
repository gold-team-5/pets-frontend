// import React, { Component } from 'react'
// import socketIOClient from "socket.io-client";
// import './MyMessageArea.css'

// class MyMessageArea extends React.Component {
//     constructor(props) {
//         super(props)

//             this.state = {
//                 response: null
//             }
//     }

//     componentDidMount = () => {
//         const ENDPOINT = "http://localhost:3005";

//         const socket = socketIOClient.connect(ENDPOINT);

//         this.setState({
//             response:socket
//         })

//         socket.emit('new_message', { username: 'username.value' })

//         socket.on('receive_message', data => {

//                 console.log(data)
//                 // let listItem = document.createElement('li')
//                 // listItem.textContent = data.username + ': ' + data.message
//                 // listItem.classList.add('list-group-item')
//                 // messageList.appendChild(listItem)

//         })

//     }

//     render() {
//         return (
//             <div className="myMessageAre">
//                 <section className="innerArea">
//                     <div onClick={this.props.removeMessageFunc} className="closeArea">

//                         <span> ❎ </span>
//                     </div>

//                     <div className="socketArea">
//                         It's <time dateTime={this.state.response}>{this.state.response}</time>
//                     </div>

//                     <div className="textArea">
//                         <section >
//                             <form >
//                                 <input type="text" placeholder="Type Your Message ..." name="messageData" required />
//                                 <input value="Send 📧 " type="submit" />
//                             </form>
//                         </section>
//                     </div>
//                 </section>
//             </div>
//         )
//     }
// }

// export default MyMessageArea

import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LoginContext } from "../context/context";

import "./MyMessageArea.css";

function MyMessageArea(props) {
    const [socket, setSocket] = useState(null);

    const Context = useContext(LoginContext)

    useEffect(() => {
        const newSocket = io(`https://gold-team-mid-project.herokuapp.com`);
        setSocket(newSocket);
        
        console.log(Context.user.user_name);

        return () => newSocket.close();
    }, [setSocket]);

    return (
        <div className="myMessageAre">
            <section className="innerArea">
                <header className="app-header">
                    <div onClick={props.removeMessageFunc} className="closeArea">

                        <span> ❎ </span>

                    </div>

                    React Chat
                </header>

                {socket ? (
                    <div className="chat-container">

                        <Messages socket={socket} />
                        <MessageInput socket={socket} />

                    </div>
                ) : (
                    <div>Not Connected</div>
                )}
            </section>
        </div>
    );
}

export default MyMessageArea;
