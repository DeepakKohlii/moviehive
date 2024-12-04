
import React from 'react';
import Marquee from 'react-fast-marquee';
import './HorizontalScrollImages.css';

function HorizontalScrollText() {
  return (
    <div className="marquee-container">
      <Marquee speed={50} gradient={true} direction={'right'}>
        <div className="image_wrapper">
          <p>DAILY UPDATED LISTS</p>
        </div>
        <div className="star">★</div> {/* Add star between items */}
        <div className="image_wrapper">
          <p>FRESH PICKS EVERY DAY</p>
        </div>
        <div className="star">★</div> {/* Add star between items */}
        <div className="image_wrapper">
          <p>ENDLESS ENTERTAINMENT</p>
        </div>
        <div className="star">★</div> {/* Add star between items */}
        <div className="image_wrapper">
          <p>INCREDIBLE CONTENT</p>
        </div>
        <div className="star">★</div> {/* Add star between items */}
        <div className="image_wrapper">
          <p>MOVIES AND DRAMAS, ANYTIME</p>
        </div>
        <div className="star">★</div> 
        <div className="image_wrapper">
          <p>YOUR ENTERTAINMENT HUB</p>
        </div>
        <div className="star">★</div> 
      </Marquee>
    </div>
  );
}

export default HorizontalScrollText;
