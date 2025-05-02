import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeMovie, dislikeMovie } from '../features/movieSlice';

export default function MovieCard(){
    const { data, loading, error, liked } = useSelector( state => state.movie );
    const dispatch = useDispatch();

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;
    if(!data) return null;

    return(
        <div style={{ border: '1px solid gray', padding: '1rem', marginTop: '1rem' }}>
            <h2>{data.name}</h2>
            <p><strong>Type:</strong> {data.type}</p>
            <p><strong>Director:</strong> {data.director}</p>
            <p><strong>Year:</strong> {data.year}</p>
            <button onClick={() => dispatch(likeMovie())} style={{ marginRight: '1rem' }}>
                👍 Like
            </button>
            <button onClick={() => dispatch(dislikeMovie())}>
                👎 Dislike
            </button>
            {liked && <p>You {liked === 'like' ? 'liked' : 'disliked'} this movie</p>}
        </div>
    );
} 