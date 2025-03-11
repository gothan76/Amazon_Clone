import React from "react";
import mobile1 from "../image/model1.jpg";
import msg from "../image/msg.png";
import "../styles/specification.css";

const Specification = () => {
  return (
    <div id="specification">
      <h4 className="color">
        Color :<span className="spn"> Brushed Green</span>
      </h4>
      <div id="mobile">
        <div className="cell">
          <img src={mobile1} alt="" />
          <h5>&#8377;20,499</h5>
          <h5>
            &#8377;<del>40,999</del>
          </h5>
          <a href="">FREE Delivery</a>
          <h5>Wed,5 Feb</h5>
        </div>
        <div className="cell">
          <img src={mobile1} alt="" />
          <h5>&#8377;20,499</h5>
          <h5>
            &#8377;<del>40,999</del>
          </h5>
          <a href="">FREE Delivery</a>
          <h5>Wed,5 Feb</h5>
        </div>
      </div>
      <h4 id="color">
        Size : <span className="spn">8GB RAM, 256GB Storage</span>
      </h4>
      <div id="btnclone">
        <h3>8GB RAM, 256GB Storage</h3>
        <h3>8GB RAM, 256GB Storage</h3>
      </div>
      <h4 id="color">
        Style Name : <span className="spn">iQOO Z9 5G</span>
      </h4>
      <div id="table">
        <div className="allign">
          <h4 className="brand">Brand</h4>
          <h4>iQOO</h4>
        </div>
        <div className="allign">
          <h4 className="brand">Operating System</h4>
          <h4>Funtouch OS 14 Based On Android 14</h4>
        </div>
        <div className="allign">
          <h4 className="brand">RAM Memory Installed Size</h4>
          <h4>8 GB</h4>
        </div>
        <div className="allign">
          <h4 className="brand">CPU Model</h4>
          <h4>Others</h4>
        </div>
        <div className="allign">
          <h4 className="brand">CPU Speed</h4>
          <h4>2.8 GHz</h4>
        </div>
      </div>
      <p id="spn_about">About this item</p>
      <div id="abt">
        <ul>
          <li>
            Fully Loaded Performance - Powered by MediaTek Dimensity 7200 built
            on flagship-grade TSMC 2nd Gen 4nm process with a clock speed of
            2.8GHz
          </li>
          <li>
            Fully Loaded Camera - Experience impressive camera shots with 50 MP
            Sony IMX882 OIS camera, 4K video recording with OIS, Super Night
            Mode, 2x Portrait Zoom, 50 MP UHD Mode
          </li>
          <li>
            Fully Loaded Display - 16.9cm (6.6) 120Hz Full HD+ AMOLED Display
            with 1800 nits local peak brightness, Certified by SGS Eye Care
            Display, DT Star2-Plus Glass protection, HDR playback supported
          </li>
          <li>
            7.83mm Slim Design, Dual Stereo Speakers, IP54 Rated, Extended RAM
            up to 8GB, FunTouch OS 14 Powered by Android 14
          </li>
        </ul>
      </div>
      <a href="" className="cs"> &gt; See more product details</a> <br />
      <a href="" className="cs mess" id="csm">
        <img src={msg} id="msg" alt="" />
        Report an issue with this product
      </a>
    </div>
  );
};

export default Specification;
