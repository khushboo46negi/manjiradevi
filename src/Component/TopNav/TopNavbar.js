import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './TopNavBar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom NextArrow and PrevArrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display:'none' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display:'none' }}
      onClick={onClick}
    />
  );
};

const TopNavBar = () => {
  // Settings for the main slider
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="topbar">
      <div className="containerfluid">
        <div className="phdnotice">
          {/* Main Slider */}
          <Slider {...mainSliderSettings} style={{width:"300px"}} >
            <div>PhD Admission Open June 2024</div>
            <div>Click here for fee Payment</div>
            <div>Call at: +917017388084</div>
          </Slider>
        </div>
        <ul className="topnav">
          <li><Link to="/iqac">IQAC</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/career">CAREER</Link></li>
          <li><Link to="/alumni">ALUMNI</Link></li>
          <li><Link to="/other">OTHER</Link></li>
          <li className="socialmedia">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="socialmedia">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;

      