import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import MyCarousel from './components/MyCarousel/MyCarousel';
import Choices from './components/Choices';
import Earth from './components/Earth/Earth';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar />
      <MyCarousel />
      <Choices />
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <i class="fab fa-react"></i>
        </p>
        
      </div>
      
    );
  }
}

export default App;
