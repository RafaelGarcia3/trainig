import React from "react";

export default function MyButton(){
    function handleClick(){
        alert('You clicked me!');
    }

    return (
        <>
            <h2>Responding to events</h2>
            <p>
                You can respond to events by declaring event handler functions inside your components. <br />
                Do not call the event handler function: you only need to pass it down. <br />
                For this example if the user clicks the button, the page shows an alert.
            </p>        
            <button onClick={handleClick}>
                Click me
            </button>
        </>
    );
}