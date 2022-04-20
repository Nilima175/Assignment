 import logo from './logo.svg';
import React from 'react';
import './App.css';

class Basic extends React.Component{
  render(){
   
      const test = "test123";

      return(
 <p> hi {test} </p>

    )

    }
  }
export default Basic;

/*function App() {

  return ( 
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> test
          Edit <code>src/App.js</code> and save to reload.
        </p>
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


export default App; */
