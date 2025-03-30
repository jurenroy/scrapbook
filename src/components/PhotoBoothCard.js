import React from 'react';
import './PhotoBoothCard.css'; // Import the CSS for styling

const PhotoBoothCard = () => {
    // Function to import all images from a specific directory
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// Dynamically import images from the assets/photobooths directory
const images = importAll(require.context('../assets/photobooths', false, /\.(png|jpe?g|svg)$/));

// Define the photoBoothData array
const photoBoothData = [
  {
      name: 'InBox',
      thumbnail: images['inboxthumbnail.png'], // Use the imported image
      fullImage: images['inbox.jpg'], // Use the imported image
      altText: 'Image 1',
  },
  {
      name: 'TimeZone',
      thumbnail: images['timezonetumbnail.jpg'], // Use the imported image
      fullImage: images['timezone.jpg'], // Use the imported image
      altText: 'Image 2',
  },
  {
      name: 'Cyber Sparkle',
      thumbnail: images['cybertumbnail.png'], // Use the imported image
      fullImage: images['cybersparkle.jpg'], // Use the imported image
      altText: 'Image 3',
  },
];
  
    return (
      <div className="photo-booth-cards">
        {photoBoothData.map((photo, index) => (
            
          <div className="photo-booth-card" key={index}>
            {photo.name}
            <img
              src={photo.thumbnail}
              alt={photo.altText}
              className="thumbnail"
            />
            <div className="overlay">
              <img
                src={photo.fullImage}
                alt={photo.altText}
                className="full-image"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

export default PhotoBoothCard;