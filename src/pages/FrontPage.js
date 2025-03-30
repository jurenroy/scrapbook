import React from 'react';

const FrontPage = ({ goToPage }) => {
  return (
    <div className="front-page">
      <h1 style={{color: 'red'}}>Happy 2nd Anniversary Lablab ❤❤</h1>
      <p>This contains memories and moments that I cherish.</p>
      <button onClick={() => goToPage('content')}>Start Exploring!</button>
    </div>
  );
};

export default FrontPage;