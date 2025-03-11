import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.css";
const Slick = () => {
  var settings = {
    dots: true, // Enable dots
    arrows: false, // Hide arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
  };

  return (
    <div id="slick">
      <Slider {...settings}>
        <div className="cont">
          <h3>Bank Offer</h3>
          <div className="pgs">
            <p className="p">
              Upto <span>&#8377;</span>3,000
            </p>
            <p className="p">discount on select</p>
            <p className="p">Credit Cards, select...</p>
          </div>
          <a className="a" href="">
            8 offer &gt;
          </a>
        </div>
        <div className="cont">
          <h3>No Cost EMI</h3>
          <div className="pgs">
            <p className="p">
              Upto <span>&#8377;</span>3,000
            </p>
            <p className="p">discount on select</p>
            <p className="p">Credit Cards, select...</p>
          </div>
          <a className="a" href="">
            8 offer &gt;
          </a>
        </div>
        <div className="cont">
          <h3>Cashback</h3>
          <div className="pgs">
            <p className="p">
              Upto <span>&#8377;</span>3,000
            </p>
            <p className="p">discount on select</p>
            <p className="p">Credit Cards, select...</p>
          </div>
          <a className="a" href="">
            8 offer &gt;
          </a>
        </div>
        <div className="cont">
          <h3>Partner Offer</h3>
          <div className="pgs">
            <p className="p">
              Upto <span>&#8377;</span>3,000
            </p>
            <p className="p">discount on select</p>
            <p className="p">Credit Cards, select...</p>
          </div>
          <a className="a" href="">
            8 offer &gt;
          </a>
        </div>
      </Slider>
      <hr className="sl" />
    </div>
  );
};

export default Slick;
