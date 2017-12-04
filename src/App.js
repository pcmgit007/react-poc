import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

function formatName(user) {
  return(
    user.firstName + ' ' +user.lastName
  );
}

const user = {
  firstName: 'Chandramouli',
  lastName: 'P',
};

/*const element = (
  //<h1>Hello {formatName(user)}!</h1>
  <div>
    <h1>Hello {formatName(user)}!</h1>
    <h2>Good to see you here.</h2>
  </div>
);*/

const element = (
  //<h1>Hello {formatName(user)}!</h1>
  <div>
    <h1>Hello {formatName(user)}!</h1>
    <h2>Good to see you here.</h2>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);

const propsElement = (
  //<h1>Hello {formatName(user)}!</h1>
  <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
  </div>
);

/*const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, '+ formatName(user) +'!'
);*/

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class App extends Component {
  render() {
    return (
      propsElement
    );
  }
}
export default App;
