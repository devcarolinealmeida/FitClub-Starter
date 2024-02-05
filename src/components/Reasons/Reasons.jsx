import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

function Reasons() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <div>
          <div><img src={image1} alt="" /></div>
          <div><img src={image2} alt="" /></div>
          <div><img src={image3} alt="" /></div>
          <div><img src={image4} alt="" /></div>
        </div>
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable partners</span>
          </div>
          <span>Our partners</span>
          <div className="partners-imgs">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
