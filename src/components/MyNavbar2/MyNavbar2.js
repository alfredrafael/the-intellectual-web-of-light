import React from 'react';
import './MyNavbar2.css';

import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class MyNavbar2 extends React.Component {

    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
        };

    onscroll = () => {
            const nav = document.querySelector('#navbar');
            if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
          };

    render() {
        return (
            <div class="nav theNavbar" ref="toggle">
    <input type="checkbox" id="nav-check"/>
    <div class="nav-header">
        <div class="nav-logo">
        JoGeek
        </div>
    </div>
    <div class="nav-btn">
        <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
        </label>
    </div>
    
    <div class="nav-links">
        <a href="//github.io/jo_geek" target="_blank">Github</a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
        <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
       {/* <button onClick={this.handleToggle}> Hello </button> */} 
    </div>
</div>
        );
   }
}
export default MyNavbar2;