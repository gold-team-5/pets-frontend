import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from '../list/list';
import Form from '../forms/forms';
import Headers from '../Header/header';
import "./ToDo.css"
import LoginProvider from '../context/context';
import Auth from '../context/auth';
import SignUp from '../context/signUp';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function addItem(item) {
    let data = { id: uuid(), text: item.text, assignee: item.assignee, complete: false, difficulty: item.difficulty }
    setList([...list, data]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Headers />

      

        <Auth capability="read">
          <div className="ToDoList">
            <h1 className="Title"> ({incomplete}) Phones in our store </h1>
            <Form addItem={addItem} />

            <List list={list} toggleComplete={toggleComplete} deleteFunction={deleteItem} />
          </div>
        </Auth>
        <SignUp />
    </>
  );
};

export default ToDo;