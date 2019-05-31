import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import MyCarousel from './components/MyCarousel/MyCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar />
      <MyCarousel />
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;