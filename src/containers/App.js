import React, { PureComponent } from 'react';
import AppClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);

    this.state = {
      persons: [
        { id: 'abc', name: 'Max', age: 28 }, 
        { id: 'def', name: 'Manu', age: 29 }, 
        { id: 'hij', name: 'Angelina', age: 27 }
      ]
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //     return nextState.persons !== this.state.persons || 
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  
  // state = {
  //   persons: [
  //     { id: 'abc', name: 'Max', age: 28 }, 
  //     { id: 'def', name: 'Manu', age: 29 }, 
  //     { id: 'hij', name: 'Angelina', age: 27 }
  //   ]
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex], 
      name: event.target.value 
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={AppClasses.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} />
        { persons }
      </div>
    );
  }
}

export default App;