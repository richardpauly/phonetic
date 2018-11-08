import React, { Component } from 'react';
import Result from './Result.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', method: 'nato' };

    this.handleChange = this.handleChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleMethodChange(event) {
    this.setState({ method: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange} autoFocus placeholder='Say something...' />
          <select value={this.state.method} onChange={this.handleMethodChange}>
              <option value="nato">English (NATO)</option>
              <option value="swedish">Swedish Armed Forces</option>
            </select>
        </form>
        <Result text={this.state.input} method={this.state.method} />
      </div>
    );
  }
}

export default App;
