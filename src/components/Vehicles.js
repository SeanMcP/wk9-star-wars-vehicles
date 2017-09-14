import React, {Component} from 'react';

export default class Vehicles extends Component {
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
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    let vehicles = this.state.vehicles.map((vehicle, i) => {
      return (
        <div className="card w-25 m-2 p-2 text-left" key={i}>
          <div className="card-block p-2">
            <h4 className="card-title">Vehicle: {vehicle.name}</h4>
            <h6 className="card-subtitle">Model: {vehicle.model}</h6>
          </div>
          <div className="card p-2">
            <div className="card-block p-2 ">
              <h5 className="card-title card-muted">Specs</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                <li className="list-group-item">Crew: {vehicle.crew}</li>
                <li className="list-group-item">Length: {vehicle.length}</li>
                <li className="list-group-item">Max speed: {vehicle.max_atmosphering_speed}</li>
                <li className="list-group-item">Cargo capacity: {vehicle.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {vehicles}
      </div>
    );
  }
}
