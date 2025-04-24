import React, { useState } from 'react';
import API from '../api.js'

export default function PersonRemove(){
    const [id, setId] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const response = await API.delete(`users/${id}`);
            console.log(response);
            console.log(response.data);
        } catch (error) {
            console.error('Error deleting the user:', error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Person ID:
                    <input type='number' name='id' onChange={(event) => {setId(event.target.value)}}/>
                </label>
                <button type='submit'>Delete</button>
            </form>
        </>
    );
}