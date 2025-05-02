import React from 'react';
import Counter from './components/Counter/Counter';
import CounterTK from './components/Counter/CounterTK';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <h1>Redux usages counters examples</h1>

      <section className='card'>
        <h2>Counter without redux toolkit</h2>
        <p> This component uses &quot;createStore&quot; and the actions are defined manually. </p>
        <Counter />
      </section>

      <section className='card'>
        <h2>Counter with redux toolkit</h2>
        <p>This component uses &quot;configureStore&quot; and &quot;createSlice&quot; to manage states easier and without that much code. </p>
        <CounterTK />
      </section>
    </div>
  );  
}
