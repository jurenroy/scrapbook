import React from 'react';
import './ValentinesDay.css'; // Import your CSS for styling

const ValentinesDay = () => {
  // Dynamically import images from the assets/waterfall directory
  const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(require.context('../assets/valentines', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
    Char Valentines HAHAHAHAHA
    <div className="valentines-bg">
        
      <div className="valentines-obj">
        <div className="valentines-objchild">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Valentine's Day Image ${index + 1}`}
              className={`valentines-image valentines-inn${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ValentinesDay;