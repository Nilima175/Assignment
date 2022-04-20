import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//import ToDoList from './ToDoList';
import Incrementor from './IncrementorProj/Incrementor';

ReactDOM.render(
    // <ToDoList />
    //<App />
   <Incrementor />
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
