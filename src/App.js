import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
        <Person name="Angelina" age="27">I like tacos and having my butt smacked!</Person>
      </div>
    );
  }
}

export default App;