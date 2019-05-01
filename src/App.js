import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Film from '../Film/Film.js'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Film />
      </div>
    );
  }
}

export default App;
