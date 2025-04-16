import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import User from "./components/User/User.jsx";

export default function App(){
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const loggedUser = localStorage.getItem("loggedUser");
    if(loggedUser){
      setUser(JSON.parse(loggedUser));
    }
  },[]);

  const handleLogout = () =>{
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <>
      { user ? (
        <User onLogout={handleLogout} />
      ) : (
        <Login onLogin={setUser} />
      ) }
    </>
  );
}
