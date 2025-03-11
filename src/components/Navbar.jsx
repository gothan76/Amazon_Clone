import amazonlogo from "../image/amazonlogo.png";
import cart from "../image/cart.png";
import flag from "../image/flag.png";
import location from "../image/location.png";
import triangle from "../image/triangle.png";
import search2 from "../image/search1.png";
import images from "../image/images.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => (
  <div className="navbar">
    <div id="amazonlogo">
      <Link to="/">
        <img src={images} alt="" className="log" />
        <img id="logo" src={amazonlogo} alt="amazonlogo" />
      </Link>
    </div>
    <div id="location">
      <img src={location} alt="location" />
      <div id="slt">
        <h6>Delivery to Kallakurichi</h6>
        <h5>Updated Location</h5>
      </div>
    </div>
    <div id="input">
      <input type="text" placeholder="Search Amazon.in" />
      <img id="ipt" src={search2} alt="search" />
    </div>
    <div id="flag">
      <img id="flg" src={flag} alt="flag" />
      <p>EN</p>
      <img id="tr" src={triangle} alt="" />
      {/* Drop down content */}
      <div id="flag-dropdown">
        <ul>
          <li>English</li>
          <li>Spanish</li>
          <li>French</li>
        </ul>
      </div>
    </div>
    <div id="account">
      <div>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          <h6>Hello,Gothan</h6>
          <h5>Accounts & Lists</h5>
        </Link>
      </div>
      <div id="tri">
        <img src={triangle} alt="" />
      </div>
    </div>
    <div id="order">
      <h6>Returns</h6>
      <h5>& Orders</h5>
    </div>
    <div id="cart">
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        <img src={cart} alt="cart" />{" "}
      </Link>
    </div>
  </div>
);

export default Navbar;
