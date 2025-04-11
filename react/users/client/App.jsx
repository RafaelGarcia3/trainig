import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/User/Login.jsx";
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
        <>
          <User />
          <button onClick={handleLogout}> Logout </button>
        </>
      ) : (
        <Login onLogin={setUser} />
      ) }
    </>
  );
}
