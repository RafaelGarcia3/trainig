import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter/Counter.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Weather from "./components/Weather/Weather.jsx";
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <h1>Examples using Hooks</h1>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </>
    </Router>
  );
}

function Index() {
  return (
    <div className="menu">
      <Link className="menu-link" to="/counter"> Counter</Link> 
      <Link className="menu-link" to="/timer"> Timer</Link> 
      <Link className="menu-link" to="/weather"> Weather app</Link>
    </div>
  );
}
