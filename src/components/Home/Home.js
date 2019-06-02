import React from 'react';
import MyCarousel from '../MyCarousel/MyCarousel';
import Choices2 from '../Choices2'
import WhatIs from '../WhatIs'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
            <MyCarousel />
            <Choices2 />

            <Link to="/whatIs">What Is it</Link>

            </React.Fragment>
        );
   }
}
export default Home;