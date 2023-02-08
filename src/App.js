import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'
import CounterHooks from './CounterHooks';
import Counter2 from './Counter2';
function App() {
  return (
    <div className="App">
     <h1>Partie Hooks</h1>
     <CounterHooks/>
     <Counter2/>

    </div>
  );
}

export default App;
