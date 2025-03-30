import React from 'react';
import './BukidnonGallery.css'; // Import your CSS for styling

const BukidnonGallery = () => {
  // Dynamically import images from the assets/waterfall directory
  const importAll = (r) => {
    return r.keys().map(r);
};

const images= importAll(require.context('../assets/bukidnon', false, /\.(png|jpe?g|svg)$/));

const desc = [
  'Abbey of the Transfiguration',
'Lovers Lane ',
'Communal Ranch',
'Lake Apo',
]

  return (
    <>
    Bukidnon Momintz
    <div className="image-card">
      
      {images.map((image, index) => (
        <div className={`image-item image-item--${index + 1}`} key={index}>
          <img src={image} alt={`Bukidnon Image ${index + 1}`} />
          <span className={`text text--${index + 1}`}>{desc[index]}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default BukidnonGallery;