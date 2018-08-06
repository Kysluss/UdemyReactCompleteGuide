import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PersonClasses from './Person.css';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                { this.props.authenticated ? <p>I'm authenticated!</p> : null}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func, 
    name: PropTypes.string, 
    age: PropTypes.number, 
    changed: PropTypes.func
}

export default withClass(Person, PersonClasses.Person);