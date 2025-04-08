import React, { use, useEffect, useState } from "react";
import './User.css';
import usersData from '../../assets/users.json';
import profileImage from '../../assets/users-avatar/rafael.jpg';

// const user = {
//     name: 'Rafael Garcia',
//     age: 24,
//     job: 'Trainee',
//     location: 'Mexico',
//     imageUrl : profileImage,
//     imageSize: 300,
// };

// const skills = [
//     { title: 'Leadership', id: 1 },
//     { title: 'Team work', id: 2},
//     { title: 'Communication', id: 3 },
//     { title: 'Flexibility', id: 4 },
//     { title: 'Adaptability', id: 5 },
// ];

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

export default function User(){
    const [user,setUser] = useState(null);

    useEffect( () => {
        const userData = usersData[1];
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
                        style={{
                            width: user.imageSize,
                            height: user.imageSize,
                            borderRadius: '50%'
                        }}
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
        </>
    );
}