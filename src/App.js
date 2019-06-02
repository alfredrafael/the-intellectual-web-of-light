import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import MyCarousel from './components/MyCarousel/MyCarousel';
import Choices from './components/Choices';
import Choices2 from './components/Choices2';

import Earth from './components/Earth/Earth';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar />
      <MyCarousel />
      <Choices2/>
       
        
      </div>
      
    );
  }
}

export default App;
