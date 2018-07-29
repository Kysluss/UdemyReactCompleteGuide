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
      ], 
      showPersons: false
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
      </div>
    );
  }
}

export default App;