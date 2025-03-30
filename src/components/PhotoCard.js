import React from 'react';
import './Card.css'; // Optional: If you want to create a separate CSS file for cards
import palagi from '../assets/palagi.jpg'

const PhotoCard = () => {
  return (
    <div className="card photo-card">
      <h2>Iloveyou my Palagi</h2>
      <img src={palagi} alt="Mountains" />
      <p>Palaging galit, gwapa, buotan, og ikaw permi.</p>
    </div>
  );
};

export default PhotoCard;