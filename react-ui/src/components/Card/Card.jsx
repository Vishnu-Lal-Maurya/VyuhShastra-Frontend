// src/Card.js
import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      {/* <img src={image} alt={title} className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default Card;