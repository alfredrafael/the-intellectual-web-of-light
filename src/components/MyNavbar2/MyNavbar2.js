import React from "react";
import "./MyNavbar2.css";
import darkWebLogo from "../../assets/intellectualdarkweb_png.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class MyNavbar2 extends React.Component {
    
    componentDidMount() {
        window.onscroll = () => {
            const nav = document.querySelector("#nav");
            if (this.scrollY <= 10) nav.className = "nav";
            else nav.className = "scroll";
          };
    }
    
    burgerToggle(){
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }

    render() {
        return (
            <nav id='nav'>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>Link 1</a>
						<a href="#" onClick={this.burgerToggle}>Link 2</a>
						<a href="#" onClick={this.burgerToggle}>Link 3</a>
					</div>
				</div>
			</nav>

        );
   }
}
export default MyNavbar2;





{/* 

    componentDidMount() {
    window.onscroll = () => {
      const nav = document.querySelector("#pureNavbar");
      if (this.scrollY <= 10) nav.className = "";
      else nav.className = "scroll";
    };
  }
///////////// on render //////////////
        <nav id="pureNavbar" class="nav2Container">
          <img src={darkWebLogo} style={{ maxWidth: "4%", marginTop: '-0.5%' }} alt="page logo" />
          <span className='navTitle'>
            The Intellectual{" "}
            <span style={{ textDecoration: "line-through" }}>Dark</span> Web{" "}
          </span>
          <span className='navOptions'>

          <ul>
          <li><Link to='/'>Hello</Link></li>
          <li><Link to='/'>Hello</Link></li>
          <li><Link to='/'>Hello</Link></li>
          </ul>

          </span>
        </nav> 
    */}