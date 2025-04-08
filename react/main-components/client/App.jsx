import React from 'react';
import './App.css';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import MyButton from './components/Event/Event.jsx';
import Count from './components/Count/Count.jsx';

export default class App extends React.Component {
  render() {
    return (
      <>
        <About />
        <User />
        <MyButton />
        <Count />
      </>
    );
  }
}
