import React from 'react';
import './FlipBook.css'; // Ensure you import the CSS file

const FlipBook = () => {
    

  // Dynamically import images from the assets/waterfall directory
  const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(require.context('../assets/youplusme', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="book">
      <div className="cover">
        <p className="text"></p>
        <img src={images[2]} alt="Image 1" className="book-image" />
      </div>
      <div className="inner">
        <p className="text"></p>
        <img src={images[1]} alt="Image 2" className="book-image" />
      </div>
      <img src={images[0]} alt="Image 1" className="book-image" />
    </div>
  );
};

export default FlipBook;