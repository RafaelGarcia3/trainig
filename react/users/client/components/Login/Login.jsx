import React, { useState } from "react";
import { loginUser } from "../../logic/authLogic";
import "./Login.css"

export default function Login( { onLogin } ){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const result = loginUser(email, password);
        if(result.success){
            onLogin(result.data);
        }else{
            setError(result.error);
        }
    };

    return (
        <>
            <h1>Welcome back!</h1>
            <p><b>Login to your account</b></p>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input 
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                {error && <p className="error-message" > {error} </p>}
                <button type="submit"> Login </button>
            </form>
        </>
    );
}