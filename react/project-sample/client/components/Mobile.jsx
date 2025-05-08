import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Mobile(){
    const [info, setInfo] = useState(null);

    useEffect( () => {
        async function fetchData () {
            try{
                const response = await axios.get('https://api.restful-api.dev/objects');
                console.log(response);
                setInfo(response.data);
            }catch(e){
                alert('There has been an error: ' + e.message);
            }
        }
        fetchData();
    }, [] );

    if (!info) return <p>Loading...</p>;

    return (
        <>
            {info.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p><strong>Id: </strong> {item.id} </p>
                    <p><strong>Capacity: </strong> {item.data?.capacity || item.data?.Capacity || 'N/A'} </p>
                    <p><strong>Color: </strong> {item.data?.color || item.data?.Color || 'N/A'} </p>
                </div>
            ))}
        </>
    );
}