import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Worlds of StarWars</h1>
        </header>
        <p className="App-intro">
          How well do you know the StarWars Universe?
          May the Force be with you.
        </p>
      </div>
    );
  }
}

export default App;
