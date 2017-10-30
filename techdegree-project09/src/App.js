import React, { Component } from 'react';
import './index.css';
import NavMenu from './Components/NavMenu.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      gallery: []
    }
  }

  render() {
    return (
      <NavMenu />
    );
  }
}

export default App;
