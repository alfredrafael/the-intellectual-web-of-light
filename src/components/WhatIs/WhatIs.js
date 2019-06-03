import React from 'react';
import MyNavbar2 from '../MyNavbar2/MyNavbar2';
import Choices2 from '../Choices2'


class WhatIs extends React.Component {


    render() {
        return (
            <div className='whatIsBody'>
            <h3>This is the "What is" component!</h3>
            <MyNavbar2 />
            <Choices2/>
            <Choices2/>
           </div>
        );
   }
}
export default WhatIs;