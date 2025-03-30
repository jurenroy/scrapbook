import React from 'react';
import './FunAdventures.css'; // Import your CSS for styling

const FunAdventures = () => {
  // Dynamically import images from the assets/waterfall directory
  const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(require.context('../assets/adventures', false, /\.(png|jpe?g|svg)$/));

// Array of adventure titles
const adventureTitles = [
    "Killing Aliens",
    "Jurz Archery",
    "Wala Lang",
    "Marz Archery",
    "Killing Zombies",
    "Carnavals"
  ];

  return (
    <div className="adventure-cards">
      {images.map((image, index) => (
        <div className={`adventure-card adventure-card--${index + 1}`} key={index}>
          <div className="adventure-card-details">
            <div className="adventure-card-header">{adventureTitles[index]}</div>
          </div>
          <div className="adventure-card-image" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      ))}
    </div>
  );
};

export default FunAdventures;