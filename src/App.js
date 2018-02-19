import React, { Component, Fragment } from 'react';
import './App.css';
import Cheer from './components/Cheer';
import {getCheer} from './handlers/api';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cheer: {
        name: 'loading cheer ...',
        description: ''
      }
    }

    this.getCheer = this.getCheer.bind(this)
  }

  componentDidMount() {
    this.getCheer()
  }

  getCheer() {
    getCheer().then(response => {
      this.setState({cheer: response.data})
    })
  }

  render() {
    return (
      <Fragment>
        <header>Cheer!</header>
        <main>
          <Cheer name={this.state.cheer.name} description={this.state.cheer.description} />
          <button onClick={this.getCheer}>New Cheer</button>
        </main>
      </Fragment>
    );
  }
}

export default App;
