import React from 'react';

const EndPage = ({ goToPage }) => {
  return (
    <div className="end-page">
      <h1>Salamat sa Lahat!</h1>
      <p>I hope you enjoyed iloveyou amping permi 💖</p>
      <button onClick={() => goToPage('front')}>Back to Front Page</button>
    </div>
  );
};

export default EndPage;