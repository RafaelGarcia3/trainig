import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);

    const filteredTodos = todos.filter(todo => {
        if(filter === 'ALL') return true;
        if(filter === 'COMPLETED') return todo.completed;
        if(filter === 'PENDING') return !todo.completed;

        return true;
    });

    return(
        <ul>
            {filteredTodos.map( todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
