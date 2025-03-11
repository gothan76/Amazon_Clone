import React from "react";
import Slider from "react-slick";
import screw from "../image/screw.png";
import truck from "../image/truck.png";
import warenty from "../image/war.png";
import cash from "../image/cash.png";
import cup from "../image/cup.png";
import '../styles/slick.css'


const Slick1 = () => {
  var settings = {
    dots: true, // Ensure dots are enabled
    arrows: false, // Hide arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
    <div id="slick1">
      <Slider {...settings}>
        <div className="contt">
          <img src={screw} alt="Screw" />
          <a href="#">7 Days Service Center and Replacement</a>
        </div>
        <div className="contt">
          <img src={truck} alt="Truck" />
          <a href="#">Free Delivery</a>
        </div>
        <div className="contt">
          <img src={warenty} alt="Warranty" />
          <a href="#">One Year Warranty</a>
        </div>
        <div className="contt">
          <img src={cash} alt="Cash" />
          <a href="#">Cash/Pay on Delivery</a>
        </div>
        <div className="contt">
          <img src={cup} alt="Cup" />
          <a href="#">Top Brand</a>
        </div>
      </Slider>
      <hr className="sl" />

    </div>
  );
};

export default Slick1;
