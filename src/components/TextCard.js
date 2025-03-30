import React, { useState } from 'react';
import './TextCard.css'; // Ensure you import the CSS file

const TextCard = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="card">
      <button
        className="yellow-btn"
        onMouseEnter={() => setHoveredButton('yellow')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === 'yellow' ? 'iloveyou❤' : 'Through Day'}
      </button>
      <button
        className="blue-btn"
        onMouseEnter={() => setHoveredButton('blue')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === 'blue' ? 'iloveyou❤' : 'Through Night'}
      </button>
    </div>
  );
};

export default TextCard;