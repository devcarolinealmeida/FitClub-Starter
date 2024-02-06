import React from "react";
import "./Plans.css";
import {plansData} from "../../data/plansData";
import RightArrow from "../../assets/rightArrow.png";
import WhiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur blur-plans-1"></div>
      <div className="blur blur-plans-2"></div>
      <div className="programs-header">
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      {/* plans cards */}
      <div className="plans">
        {plansData.map((plain, i)=> (
            <div className="plan-card" key={i}>
                {plain.icon}
                <span>{plain.name}</span>
                <span>$ {plain.price}</span>
                <div className="plan-features">
                    {plain.features.map((feature, i)=> (
                        <div className="feature">
                            <img src={WhiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <span>See more benefits</span>
                    <img src={RightArrow} alt="" />
                </div>
                <button className="btn white">Join Now</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
