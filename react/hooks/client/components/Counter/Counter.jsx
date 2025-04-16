import React, { useState, useContext } from 'react';
import './Counter.css'

const ThemeContext = React.createContext('light');

function ThemedButton({ onClick, children }){
    const theme = useContext(ThemeContext);

    return (
        <button className={theme} onClick={onClick}> 
            {children}
        </button>
    );
}

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <ThemeContext.Provider value='dark'>
            <p>You've clicked {count} times</p>
            <ThemedButton onClick={() => setCount(count + 1)}>Click me!</ThemedButton>
        </ThemeContext.Provider>
    );
}
