import React, { useState } from 'react';
import axios from 'axios';

export default function PersonAdd(){
    const [name, setName] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const user = {name: name};

        axios.post('https://jsonplaceholder.typicode.com/users', {user}).then(res =>{
            console.log(res);
            console.log(res.data);
        });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input type='text' name='name' onChange={(event) =>{setName(event.target.value)}} /> 
                </label>
                <button type='submit'>Add</button>
            </form>
        </>
    );
}