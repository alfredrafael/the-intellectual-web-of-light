import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import MyCarousel from './components/MyCarousel/MyCarousel';
import Choices from './components/Choices';
import Choices2 from './components/Choices2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Earth from './components/Earth/Earth';

class App extends Component {
  render() {
    return (
      <Router>
      <MyNavbar />
      <MyCarousel />
      <Choices2/>
       
        
      </Router>      
    );
  }
}

export default App;
