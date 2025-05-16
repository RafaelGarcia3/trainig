import React from 'react';
import useCounter from '../hooks/useCounter';

export default function Counter(){
    const {count, increment, decrement, reset} = useCounter();

    return(
        <>
            <h2>Example 2: Simple counter</h2>
            <p>Actual value: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}