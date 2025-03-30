import React from 'react';
import './Card.css'; // Optional: If you want to create a separate CSS file for cards

const QuoteCard = () => {
  return (
    <div className="card quote-card">
      <h2>Quote for this Year HAHAHA</h2>
      <blockquote>
        "The journey of a thousand miles begins with one step." - Lao Tzu
      </blockquote>
    </div>
  );
};

export default QuoteCard;