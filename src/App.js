import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import MyCarousel from "./components/MyCarousel/MyCarousel";
import WhatIs from './components/WhatIs';
import Earth from './components/Earth/Earth';

class App extends Component {
  render() {
    return (
      <Router>
      <MyNavbar/>
     
      <Route exact path="/" component={Home}/>

       <Route path="/whatIs" component={WhatIs} />

        
      </Router>      
    );
  }
}

export default App;
