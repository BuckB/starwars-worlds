import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bem-vindos ao Mundos de</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            Quanto você conhece do Universo Star Wars?
          </p>
        </header>
        <div className="container-fluid mt-4 col-md-6">
          <div className="justify-content-center">
              <Cards />
              <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
