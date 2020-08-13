import React, { Component } from 'react';
import HomePage from '../src/Components/HomePage/HomePage';
import Header from '../src/Components/Header/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
