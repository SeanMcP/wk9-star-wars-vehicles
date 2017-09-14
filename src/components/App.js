import React, {Component} from 'react';
import '../styles/App.css';

import Jumbotron from './Jumbotron.js'
import Vehicles from './Vehicles.js'

class App extends Component {
  constructor(props) {
    super(props)

    // PROPS AND STATE
    // Set props and state below.
    // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
    // Enter your code below:
    this.state = {
      'vehicles': [],
      'value': '',
      'pilot': ''
    }

    // FORM: HANDLE INPUT CHANGES
    // handleNameChange below:
    // See form lesson for details.
    // Enter your code below:
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    // const newComment = {
    //   commentText: this.state.commentText,
    //   name: this.state.name
    // }
    // const comments = this.state.comments;
    // comments.push(newComment)

    this.setState({ pilot: this.state.name })
  }

  componentWillMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(res => res.json() )
    .then(data => {
      console.log("data.results from componentWillMount fetch:\n", data.results)
      this.setState({ vehicles: data.results })
      console.log('this.state.vehicles:\n', this.state.vehicles)
    })
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    return (
      <div className="App">
        <Jumbotron />

        <Vehicles />
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    );
  }
}

export default App;
