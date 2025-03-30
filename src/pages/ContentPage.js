import React, { useState } from 'react';
import PhotoCard from '../components/PhotoCard';
import QuoteCard from '../components/QuoteCard';
import TextCard from '../components/TextCard';
import StackOfPictures from '../components/StackOfPictures';
import PhotoBoothCard from '../components/PhotoBoothCard';
import BirthdaySwiper from '../components/BirthdaySwiper';
import GraduationPics from '../components/GraduationPics';
import BukidnonGallery from '../components/BukidnonGallery';
import ValentinesDay from '../components/ValentinesDay';
import FunAdventures from '../components/FunAdventures';
import RecipeCard from '../components/RecipeCard';
import FlipBook from '../components/FlipBook';
import InfoCard from '../components/InfoCard';
import './ContentPage.css'

const ContentPage = ({ goToPage }) => {
  // Array of card components
  const cards = [
    <StackOfPictures />,
    <PhotoBoothCard />,
    <FunAdventures />,
    <BirthdaySwiper />,
    <GraduationPics />,
    <BukidnonGallery />,
    <RecipeCard />,
    <ValentinesDay />,
    <FlipBook />,
    <InfoCard />,
    <TextCard />,
    <PhotoCard key="photo" />,
    <QuoteCard key="quote" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="content-page">
      <h1 className='damn'>Anniversary Cards</h1>
      <div className="card-container">
        {cards[currentIndex]} {/* Display only the current card */}
      </div>
      <div className="navigation">
        {currentIndex > 0 ? (
          <button onClick={previousCard} disabled={currentIndex === 0}>
            Previous
          </button>
        ) : null}
        {currentIndex === cards.length - 1 ? (
          <button onClick={() => goToPage('end')}>Go to End Page</button>
        ) : (
          <button onClick={nextCard} disabled={currentIndex === cards.length - 1}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentPage;