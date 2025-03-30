import React from 'react';
import './RecipeCard.css'; // Ensure you import the CSS file
import recipeImage from '../assets/gift.png'

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <div className="card-content">
        <div className="card-back">
          <div className="back-content">
            <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
              {/* SVG content here */}
            </svg>
            <strong>The Best Christmas Gift I ever have.</strong>
          </div>
        </div>
        <div className="card-front">
          <div className="img">
            <img src={recipeImage} alt="Delicious Recipe" className="recipe-image" /> {/* Add your image here */}
            <div className="circle">ASD</div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">is having you!</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Mariel Patimay R. Cabilogan</strong>
                </p>
                <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256">
                  {/* SVG content here */}
                </svg>
              </div>
              <p className="card-footer">Gwapa &nbsp; | &nbsp; Buotan KAAYO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;