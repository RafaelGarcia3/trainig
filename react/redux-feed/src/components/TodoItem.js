import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';

export default function TodoItem({ todo }){
    const dispatch = useDispatch();

    return(
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button className='button-action' onClick={() => dispatch(toggleTodo(todo.id))}>Complete</button>
            <button className='button-action' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
    );
};
