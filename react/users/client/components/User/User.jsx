import React, { useEffect, useState } from "react";
import './User.css';
import usersData from '../../assets/users.json';
import profileImage from '../../assets/rafael.jpg';

function Skills(skills){
    const listItems = skills.map( (skill, index) =>
        <li key={index} >
            {skill}
        </li>
    );

    return (
        <ul> {listItems} </ul>
    );
}

export default function User( {onLogout} ){
    const [user,setUser] = useState(null);

    useEffect( () => {
        const userData = JSON.parse(localStorage.getItem("loggedUser"));
        console.log(userData);
        setUser(userData);
    }, []);

    if(!user){
        return(
            <div>Loading...</div>
        );
    }

    return(
        <>
            <div>
                <h2>Displaying data</h2>
                <p>
                    JSX lets you put markup into JavaScript. Curly braces let you escape back into JS so that you can 
                    embed some variable from your code and display it to the user. <br />
                    In this example I'm creating an object user and I'm displaying the object data to the user.
                </p>
            </div>
            <div className="card">
                <div className="avatar">
                    <img 
                        src={user.imageUrl}
                        alt={'Photo of ' + user.name}
                    />
                </div>
                <div className="user-info">
                    <h3>User: {user.name}</h3>
                    <p>
                        <b>Age: </b> {user.age} <br />
                        <b>Job: </b> {user.job} <br />
                        <b>Location: </b> {user.location} 
                    </p>
                    <h4> Skills </h4>
                    {Skills(user.skills)}
                </div>
            </div>
            <button className="logout-button" onClick={onLogout}> Logout </button>
        </>
    );
}