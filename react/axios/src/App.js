import React from 'react';
import './App.css';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';

export default function App() {
  return (
    <>
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </>
  );
}
