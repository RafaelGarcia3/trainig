import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todos/FilterSlice';

export default function Filter(){
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filter);
    const filters = ['ALL', 'COMPLETED', 'PENDING'];

    return(
        <>
            {filters.map( f =>(
                <button
                    key={f}
                    onClick={() => dispatch(setFilter(f))}
                    style={{ fontWeight: currentFilter === f ? 'bold' : 'normal' }}
                >
                    {f}
                </button>
            ))}
        </>
    );
};
