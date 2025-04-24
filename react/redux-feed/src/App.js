import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todos/todosSlice';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

export default function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () =>{
    if(text.trim()){
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input 
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Input a task'
      />
      &nbsp;
      <button onClick={handleAdd}>Add</button>
      <br/><br/>
      <Filter/>
      <TodoList/>
    </>
  );  
}
