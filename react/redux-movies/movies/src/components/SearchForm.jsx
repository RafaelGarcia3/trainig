import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../features/movieSlice';

export default function SearchForm(){
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchMovie(title));
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Input a movie title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    );
}