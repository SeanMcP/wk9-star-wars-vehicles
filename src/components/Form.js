import React, {Component} from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'vehicles': [],
      'value': '',
      'pilot': '',
      'print': ''
    }
    // FORM: HANDLE INPUT CHANGES
    // handleNameChange below:
    // See form lesson for details.
    // Enter your code below:
    this.handlePilotChange = this.handlePilotChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handlePilotChange(event){
    this.setState({
      pilot: event.target.value
    })
    console.log('this.state.pilot: ', this.state.pilot);
  }

  handleFormSubmit(event) {
    event.preventDefault()

    this.setState({ pilot: "", print: this.state.pilot })
    console.log('SUBMIT this.state.pilot: ', this.state.pilot);
  }
  render() {
    return (
      <div className="card">
        <div className="card-block p-2">
          <h3>What's your name, sailor?</h3>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <input onChange={this.handlePilotChange} className="form-control w-50 mx-auto mt-3" name="pilot"  type="text" value={this.state.pilot} />
            </div>
            <div className="form-group pull-right">
              <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
            </div>
          </form>
          <h3>{this.state.print}</h3>
        </div>
      </div>
    )
  }
}
