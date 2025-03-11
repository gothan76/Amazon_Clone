import React from "react";
import amazonlogo from "../image/images1.png";
import "../styles/login.css";

const Signin = () => {
  return (
    <div id="lgn">
      <div id="lg">
        <img src={amazonlogo} alt="" />
        <p>.in</p>
      </div>
      <div id="part1">
        <p>Sign in or create account</p>
        <label htmlFor="">Enter mobile number or email</label>
        <input type="text" />
        <button>Continue</button>
        <h5>
          By continuing,you agree to Amazon's{" "}
          <span>
            <a href="">Conditions of use</a>
          </span>{" "}
          and{" "}
          <span>
            <a href="">Privacy Notice.</a>
          </span>
        </h5>
        <hr />
        <label htmlFor="">Buying for work?</label>
        <a href="" id="shop">
          Shop on Amazon Business
        </a>
      </div>
      <hr className="hr" />
      <div id="part2">
        <div id="lk">
          <a href="">Conditions of use</a>
          <a href="">Privacy Notice</a>
          <a href="">Help</a>
        </div>
        <div>
          <h6>&#169; 1996-2024, Amazon.com, Inc. or its affiliates</h6>
        </div>
      </div>
    </div>
  );
};

export default Signin;
