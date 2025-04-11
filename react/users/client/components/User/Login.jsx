import React, { useState } from "react";
import usersData from "../../assets/users.json";

export default function Login( { onLogin } ){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const user = usersData.find( (user) => (user.email === email) && (user.password === password) );
        
        if(user){
            localStorage.setItem("loggedUser", JSON.stringify(user));
            onLogin(user);
        }else{
            setError("Invalid credentials. Please try again");
        }
    };

    return (
        <>
            <h2>Login</h2>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}> Login </button>
            {error && (<p style={{color: "red"}}> {error} </p>)}
        </>
    );
}