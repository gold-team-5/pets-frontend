import React, { Component } from 'react'
import reset from 'react-style-reset';
// import "../reset.css"

import './message.css'
import myImage from '../../img/myQuestion.png'

class Message extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div onClick={()=>this.props.myMessageFunc()} className="myMessage">
                <img src={`${myImage}`} alt="message" />
            </div>
        )
    }
}

export default Message
