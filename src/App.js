import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import ContentPage from './pages/ContentPage';
import EndPage from './pages/EndPage';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('front');

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'front' && <FrontPage goToPage={goToPage} />}
      {currentPage === 'content' && <ContentPage goToPage={goToPage} />}
      {currentPage === 'end' && <EndPage goToPage={goToPage} />}
    </div>
  );
};

export default App;