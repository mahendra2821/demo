import React, { useState } from 'react';
import './Slider.css'; // Make sure to add the updated responsive styles

const Slider = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    const banner = document.querySelector('.banner');
    banner.classList.add('fade-out');
    setTimeout(() => setIsVisible(false), 300); // Optional: Adjust the timeout for smoother transition
  };

  if (!isVisible) return null;

  return (
    <div className="banner">
      <p className="banner-text">
        Sign up to <strong>GET 20% OFF</strong> for your first order.
        <a href="/signup" className="signup-link">Sign up now</a>
      </p>
      <button className="close-btn" onClick={handleClose}>×</button>
    </div>
  );
};

export default Slider;
