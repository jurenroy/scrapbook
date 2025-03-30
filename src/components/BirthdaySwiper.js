import React, { useEffect, useState } from 'react';
import './BirthdaySwiper.css'; // Import your CSS for styling

const BirthdaySwiper = () => {

  // Dynamically import images from the assets/waterfall directory
  const importAll = (r) => {
    return r.keys().map(r);
};

const imagesYou = importAll(require.context('../assets/birthday/me', false, /\.(png|jpe?g|svg)$/));

const imagesPartner = importAll(require.context('../assets/birthday/you', false, /\.(png|jpe?g|svg)$/));

  const [currentIndexYou, setCurrentIndexYou] = useState(0);
  const [currentIndexPartner, setCurrentIndexPartner] = useState(0);
  const [isPartner, setIsPartner] = useState(false); // Track current celebrator

  useEffect(() => {
    const intervalYou = setInterval(() => {
      setCurrentIndexYou((prevIndex) => (prevIndex + 1) % imagesYou.length);
    }, 3000); // Change slide every 3 seconds for you

    const intervalPartner = setInterval(() => {
      setCurrentIndexPartner((prevIndex) => (prevIndex + 1) % imagesPartner.length);
    }, 3000); // Change slide every 3 seconds for partner

    return () => {
      clearInterval(intervalYou);
      clearInterval(intervalPartner);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        setIsPartner(false);
      } else if (event.key === 'ArrowDown') {
        setIsPartner(true);
      } else if (event.key === 'ArrowRight') {
        handleSwipe('left', isPartner);
      } else if (event.key === 'ArrowLeft') {
        handleSwipe('right', isPartner);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPartner]);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e, isPartner) => {
    touchStartX = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e, isPartner) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe(touchStartX > touchEndX ? 'left' : 'right', isPartner);
  };

  const handleSwipe = (direction, isPartner) => {
    if (isPartner) {
      if (direction === 'left') {
        setCurrentIndexPartner((prevIndex) => (prevIndex + 1) % imagesPartner.length);
      } else if (direction === 'right') {
        setCurrentIndexPartner((prevIndex) => (prevIndex - 1 + imagesPartner.length) % imagesPartner.length);
      }
    } else {
      if (direction === 'left') {
        setCurrentIndexYou((prevIndex) => (prevIndex + 1) % imagesYou.length);
      } else if (direction === 'right') {
        setCurrentIndexYou((prevIndex) => (prevIndex - 1 + imagesYou.length) % imagesYou.length);
      }
    }
  };

  // Function to handle dot click
  const handleDotClick = (index, isPartner) => {
    if (isPartner) {
      setCurrentIndexPartner(index);
    } else {
      setCurrentIndexYou(index);
    }
  };

  return (
    <div className="birthday-swiper-container">
      <div className={`swiper-section ${!isPartner ? 'active' : ''}`}>
        <h2>My Birthday with You</h2>
        <div className="swiper" onTouchStart={(e) => handleTouchStart(e, false)} onTouchEnd={(e) => handleTouchEnd(e, false)}>
          <img src={imagesYou[currentIndexYou]} alt={`Your Birthday Celebration ${currentIndexYou + 1}`} />
        </div>
        <div className="dot-indicators">
          {imagesYou.map((_, index) => (
            <span key={index} className={`dot ${currentIndexYou === index ? 'active' : ''}`} onClick={() => handleDotClick(index, false)}></span>
          ))}
        </div>
      </div>

      <div className={`swiper-section ${isPartner ? 'active' : ''}`}>
        <h2>Your Birthday with Me</h2>
        <div className="swiper" onTouchStart={(e) => handleTouchStart(e, true)} onTouchEnd={(e) => handleTouchEnd(e, true)}>
          <img src={imagesPartner[currentIndexPartner]} alt={`Partner's Birthday Celebration ${currentIndexPartner + 1}`} />
        </div>
        <div className="dot-indicators">
          {imagesPartner.map((_, index) => (
            <span key={index} className={`dot ${currentIndexPartner === index ? 'active' : ''}`} onClick={() => handleDotClick(index, true)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdaySwiper;