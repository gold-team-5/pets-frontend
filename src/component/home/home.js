import React from "react";
import "./home.css";
import img1 from "../../img/beagle-looking-depressed-SW-removebg-preview.png";

export default function Home(props) {
 
  return (
    <>
      <img id="img1" src={img1} alt="img1" />
      {/*  */}
      <p id="homeP">a house is not home without a pet</p>
      {/*  */}
      <a href='/Pets'>
        <div class="stage" >
          <div class="wrapper">
            <div class="slash"></div>
            <div class="sides">
              <div class="side"></div>
              <div class="side"></div>
              <div class="side"></div>
              <div class="side"></div>
            </div>
            <div class="text">
              <div class="text--backing">adoption</div>
              <div class="text--left">
                <div class="inner">adoption</div>
              </div>
              <div class="text--right">
                <div class="inner">adoption</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
