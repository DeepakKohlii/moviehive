import React from 'react';
import Marquee from 'react-fast-marquee';
import movie1 from '../assets/movie1.png';


function HeroImageScroll() {
  return (
    <div className="image-container">
      <Marquee speed={50} direction="left">
        <div className="image">
          <img src={movie1} alt="Movie 1" />
        </div>
        <div className="image_wrapper">
          <img src={movie1} alt="Movie 2" />
        </div>
        <div className="image_wrapper">
          <img src={movie1} alt="Movie 3" />
        </div>
        <div className="image_wrapper">
          <img src={movie1} alt="Movie 4" />
          
        </div>
        <div className="image_wrapper">
          <img src={movie1} alt="Movie 5" />
        </div>
      </Marquee>
    </div>
  );
}

export default HeroImageScroll;