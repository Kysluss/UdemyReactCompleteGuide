import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Manu', age: 29 }, 
      { name: 'Angelina', age: 27 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('switchNameHandler was  clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 }, 
        { name: 'Manu', age: 29 }, 
        { name: 'Angelina', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 29 }, 
        { name: 'Angelina', age: 27 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;