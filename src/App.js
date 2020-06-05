import React from 'react';
import logo from './logo.svg';
import './scss/App.scss';
import Clock from './js/time'
import Tick from './js/Button';
import Toggle from './js/toggle';
import arr from './js/demo'
import Numbers from './js/ArrayAndKeys'
import Count from './js/state'
import Hello from './js/lisfCycle'
import Ajax from './js/ajax'
import Form from  './js/form'
import MyComponent from './js/refs'
// const numbers =[1,2,3,4,5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle />
        <Clock />
        <Tick />
        <Count />
        {/* <Numbers numbers={numbers} /> */}
        <Numbers />
        <Hello name="World"/>
        <Ajax />
        <Form />
        <MyComponent />
        <div>{arr}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}


export default App;
