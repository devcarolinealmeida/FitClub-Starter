import React from 'react';
import Header from '../Header/Header.jsx';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header/>
        {/* the best ad */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
        {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
        {/* Hero data figures */}
            <div className="figures">
                <div>
                    <span>+ 140</span>
                    <span>Expert coaches</span>
                </div>
                <div>
                    <span>+ 978</span>
                    <span>Members joined</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>Fitness programs</span>
                </div>
            </div>
        {/* Hero buttons */}
            <div className='hero-buttons'>
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn hollow">Learn More</buttons>
            </div>
        </div>
        <div className='right-h'>
            <button className='btn white'>Join now</button>
            <div className="heart-rate">
                <img src={Heart} alt="Heart" />
            
                <span>Heart Rate</span>
                <span>116 bpm</span>
                
            </div>
        </div>
    </div>
  )
}

export default Hero