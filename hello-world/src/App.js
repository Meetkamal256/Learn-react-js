import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassClick />
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is Children Props</p></Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>Action </button>
      </Greet> */}
      {/* <Greet/> */}
      {/* <Welcome name="Bruce" heroName="Batman"/> 
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder woman"/> */}
      {/* <Hello />   */}
      </div>
    );
  }
}

export default App;
