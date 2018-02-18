import React, { Component, Fragment } from 'react';
import './App.css';
import Cheer from './components/Cheer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>Cheer!</header>
        <main>
          <button>New Cheer</button>
          <Cheer name="Politician" description="Pat yourself on the back." />
        </main>
      </Fragment>
    );
  }
}

export default App;
