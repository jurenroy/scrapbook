import React from 'react';
import './GraduationPics.css'; // Import your CSS for styling

const GraduationPics = () => {
    // Dynamically import images from the assets/waterfall directory
  const importAll = (r) => {
    return r.keys().map(r);
};

const images= importAll(require.context('../assets/graduation', false, /\.(png|jpe?g|svg)$/));

  const colors = [
    '142, 249, 252',
    '142, 252, 204',
    '142, 252, 157',
    '215, 252, 142',
    '252, 252, 142',
    '252, 208, 142',
    '252, 142, 142',
    '252, 142, 239',
    '204, 142, 252',
    '142, 202, 252',
  ];

  return (
    <div className="graduation-wrapper">
        <p style={{fontWeight: 'bold'}}>Graduation</p>
      <div className="graduation-inner" style={{ '--quantity': images.length }}>
        {images.map((image, index) => (
          <div
            className="graduation-card"
            key={index}
            style={{
              '--index': index,
              '--color-card': colors[index],
            }}
          >
            <div
              className="graduation-img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraduationPics;