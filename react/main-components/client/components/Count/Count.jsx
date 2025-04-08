import React, {useState} from 'react';

function MyButton (){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

export default function Count (){
    return(
        <>
            <h2> Updating the screen </h2>
            <p>
                Often, you'll want your component to remember some information and display it. <br />
                In this example the user wants to count the number of times a button is clicked. 
                To do this, it's necessary to add a state into the component.
            </p>
            <MyButton /> &nbsp;
            <MyButton />
        </>
    );
}