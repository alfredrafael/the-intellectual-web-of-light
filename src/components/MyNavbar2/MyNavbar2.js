import React from "react";
import "./MyNavbar2.css";
import darkWebLogo from "../../assets/intellectualdarkweb_png.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyNavbar2 extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      const nav = document.querySelector("#pureNavbar");
      if (this.scrollY <= 10) nav.className = "";
      else nav.className = "scroll";
    };
  }

  
  render() {

    return (
      <div>
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
        {/*   <i class="fa fa-bars icon" onClick={myFunction}></i> */}
          </ul>

          </span>
        </nav>
      </div>
    );
  }
}
export default MyNavbar2;
