import React, { useState, useContext } from 'react';
import './MessageInput.css';
import { LoginContext } from '../context/context'

const NewMessage = ({ socket }) => {

  const Context = useContext(LoginContext)

  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    
    console.log(Context.user.user_name);

    let messageObj = {
      value:value,
      useName:Context.user.user_name
    }
    socket.emit('message', value);
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        id="inputText"
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <input id="inputButton" value="Send 📧 " type="submit" />
    </form>
  );
};

export default NewMessage;