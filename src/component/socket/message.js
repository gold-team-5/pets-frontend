import React, { Component } from 'react'
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
