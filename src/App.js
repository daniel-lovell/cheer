import React, { Component, Fragment } from 'react';
import './App.css';
import Cheer from './components/Cheer';
import {getCheer} from './handlers/api';

class App extends Component {
  constructor() {
    super()
    this.state = {
      noRepeats: true,
      cheer: {
        id: 0,
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
    getCheer(this.state.cheer.id, this.state.noRepeats).then(cheer => {
      this.setState({cheer})
    }).catch(err => console.error('getCheer', err))
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Cheer!</h1>
        </header>
        <main>
          <Cheer name={this.state.cheer.name} description={this.state.cheer.description} />
          <button onClick={this.getCheer}>New Cheer</button>
          <label>
            <input
              type="checkbox"
              name="noRepeats"
              checked={this.state.noRepeats}
              onChange={() => this.setState((prevState) => ({noRepeats: !prevState.noRepeats}))}
            />
            No Repeats
          </label>
        </main>
      </Fragment>
    );
  }
}

export default App;
