import React, { useState } from "react";
import "./Testimonials.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3}
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        {/* testimonial content */}
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={ {color:"var(--orange)"}}>{testimonialsData[selected].name}</span>
            <span> - {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{ opacity: 0, x: -100}}
        transition={{ ...transition, duration: 2 }}
        whileInView={{ opacity: 1, x: 0}}
        ></motion.div>
        <motion.div
        initial={{ opacity:0, x: 100}}
        transition={{...transition, duration: 2}}
        whileInView={{ opacity:1, x: 0 }}
        ></motion.div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
            <img 
            onClick={()=> {
                selected === 0 ? setSelected(testimonialLength - 1) : setSelected((prev) => prev - 1);
            }}
            src={leftArrow} alt="" />
            <img 
            onClick={()=> {
                selected === testimonialLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
            }}
            src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
