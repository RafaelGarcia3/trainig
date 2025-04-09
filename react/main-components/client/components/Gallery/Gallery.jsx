import React, { useState } from "react";
import sculptureList from '../../assets/sculpture.json';

export default function Gallery(){
    const [index, setIndex] = useState(0);

    function handleClick(isNext){
        if(isNext){
            if(index < sculptureList.length - 1)
                setIndex( index + 1); 
            else
                setIndex(0);
        }else{
            if(index > 0)
                setIndex( index - 1);
            else{
                setIndex( sculptureList.length-1 );
            }
        }
    }

    let sculpture = sculptureList[index];

    return(
        <>
            <button onClick={() => handleClick(false)}> &lt;&lt; Previous </button>
            &nbsp;&nbsp;
            <button onClick={() => handleClick(true)}> Next &gt;&gt; </button>

            <h2>
                <i>{sculpture.name}</i>&nbsp; 
                by {sculpture.artist}
            </h2>
            <p>
                <b>({index+1} of {sculptureList.length})</b>
            </p>
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
                style={{height : 200}}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}