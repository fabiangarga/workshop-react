import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/Board';

import './App.css';

class App extends Component {
    state = {
        title: "TA-TE-TI"
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <Board/>
      </div>
    );
  }
}

export default App;
