import React from "react";
import full from "../image/fulfill.png";
import location from "../image/location1.png";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <p id="rupee">&#8377; 20498</p>
      <img src={full} id="amazon" alt="" />
      <p className="par">
        <a className="pg" href="">
          FREE Delivary
        </a>
        Wednesday,5 February.Order within 12hrs 36 mins.{" "}
        <a className="pg" href="">
          Details
        </a>
      </p>
      <a href="" className="par111">
        <img id="loca" src={location} alt="" /> Delivary To Gothan -
        Kallakurichi 605751.
      </a>
      <h4 id="stk">In Stock</h4>
      {/* <div> */}
      <div className="goth">
        <div className="kdd">
          <h5>Payment</h5>
          <a href="">Secure Transcation</a>
        </div>
        <div className="kdd">
          <h5>Ships from</h5>
          <a href="">Amazon</a>
        </div>
        <div className="kdd">
          <h5>Sold by</h5>
          <a href="">KD Queen</a>
        </div>
      </div>
          <h5 id="add1">Add a Protection Plan:</h5>
      <div id="form">
        <div>
          <input type="checkbox" />
          <a href="">
            Total Protection Plan <span style={{ color: "black" }}>For</span>
          </a>
          <br />
          <span style={{ color: "#9c1f1f" }}>&#8377; 1,499.00</span>
        </div>
        <div>
          <input type="checkbox" />
          <a href="">
            Extended Warenty <span style={{ color: "black" }}>For</span>
          </a>
          <br />
          <span style={{ color: "#9c1f1f" }}>&#8377; 849.00</span>
        </div>
        <div id="btns">
          <button id="crt">Add to Cart</button>
          <button id="buy">Buy Now</button>
        </div>
        <div>
          <input id="gift" type="checkbox" />
          <label>Add gift options</label>
          <input id="box" type="text" placeholder="Add To Wish List" />
        </div>
      </div>
      {/* </div> */}
      <div></div>
    </div>
  );
};

export default Sidebar;
