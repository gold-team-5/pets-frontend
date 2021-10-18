import React from "react";

import "./aboutUs.css";

import img1 from "../../img/wijdan.png";
import emman from "../../img/eman.jpg";
import Alaa from "../../img/Alaa.png";
import mohammed from "../../img/mohammed.jpg";
import siham from "../../img/siham.jpg";
export default function AboutUS(props) {
  
  return (
    <>


{/* <div class='card5'>

<div class='card'>
<div class='img-cont'>
<span class='drop-down-window'></span>

<img id="cardIMG" src={img1} alt="img1" />
</div>
<div class='content-cont'>

<span class='card-header'>Wijdan khaled</span>
<span class='card-body'>Coputer Since</span>
</div>
</div>

</div> */}
  <h1 data-text="Gold Team">
    <span class="glitch1" data-text="Gold Team" aria-hidden></span>
    <span class="glitch2" data-text="Gold Team" aria-hidden></span>
    Gold Team
  </h1>

    <div class='cardcontaner'>
    <div class='card1'>

    <div class='card'>
  <div class='img-cont'>
    <span class='drop-down-window'></span>
    
    <img id="cardIMG" src={mohammed} alt="img1" />
  </div>
  <div class='content-cont'>

    <span class='card-header'>MOHAMMED</span>
    <span class='card-body'>Electrical power Engineer</span>
  </div>
</div>

    </div>

    <div class='card2'>

<div class='card'>
<div class='img-cont'>
<span class='drop-down-window'></span>

<img id="cardIMG" src={Alaa} alt="img1" />
</div>
<div class='content-cont'>

<span class='card-header'>ALAA</span>
<span class='card-body'>Surveying  Engineering</span>
</div>
</div>

</div>

<div class='card3'>

<div class='card'>
<div class='img-cont'>
<span class='drop-down-window'></span>

<img id="cardIMG" src={siham} alt="img1" />
</div>
<div class='content-cont'>

<span class='card-header'>SIHAM</span>
<span class='card-body'>Biomedical Engineer</span>
</div>
</div>

</div>

<div class='card4'>

<div class='card'>
<div class='img-cont'>
<span class='drop-down-window'></span>

<img id="cardIMG" src={emman} alt="img1" />
</div>
<div class='content-cont'>

<span class='card-header'>Emman</span>
<span class='card-body'>Computer information system </span>
</div>
</div>

</div>

<div class='card5'>

<div class='card'>
<div class='img-cont'>
<span class='drop-down-window'></span>

<img id="cardIMG" src={img1} alt="img1" />
</div>
<div class='content-cont'>

<span class='card-header'>Wijdan khaled</span>
<span class='card-body'>Coputer Since</span>
</div>
</div>

</div>

</div>


    </>
  )
}

