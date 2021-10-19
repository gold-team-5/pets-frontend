import React, { useState, useContext } from 'react';
import './MessageInput.css';
import { LoginContext } from '../context/context'

const NewMessage = ({ socket }) => {

  const Context = useContext(LoginContext)

  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    
    console.log(Context.user);

    let messageObj = {
      value:value,
      useName:Context.user.user_name
    }
    socket.emit('message', messageObj);
    setValue('');
  };

  return (
    <form className='messgeform' onSubmit={submitForm}>
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