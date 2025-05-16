import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScreenSize from './pages/ScreenSize';
import Counter from './pages/Counter';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example1' element={<ScreenSize />} />
        <Route path='/example2' element={<Counter />} />
      </Routes>
    </>
  );  
}
