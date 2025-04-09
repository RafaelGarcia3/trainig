import React, { useState } from "react";

export default function Control(){
    const [name, setName] = useState('');
    const [age, setAge] = useState(20);
    const ageNumber = Number(age);
    const [text, setText] = useState('');

    return(
        <>
            <label>
                Name: &nbsp;
                <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <br/><br/>
            <label>
                Age: &nbsp;
                <input 
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    type="number"
                    /> &nbsp;
                <button onClick={() => setAge(ageNumber+10)}>
                    Add 10 years
                </button>
            </label>
            <br/><br/>
            <label>
                Description: &nbsp;
                <textarea 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    
                />
            </label> <br/><br/>
            <b>Output</b>
            {name !== '' && <p> Your name is {name}. </p>}
            {age > 0 && <p> Your age is {age}. </p>}
            {text !== '' && <p>You wrote this: <br/> {text} </p>}
        </>
    );
}