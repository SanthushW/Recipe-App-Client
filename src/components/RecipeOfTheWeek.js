import React from "react";
import "../styles/RecipeOfTheWeek.css";
import butterChicken from "../assets/butter-chicken.jpg";

const RecipeOfTheWeek = () => {
  return (
    <div className="recipe-of-the-week">
      <h2 className="section-title">Recipe of the Week</h2>
      <div className="recipe-content">
        <div className="recipe-image-container">
          <img
            src={butterChicken}
            alt="Butter Garlic Chicken"
            className="recipe-image"
          />
          <div className="play-button">
            <span className="play-icon">&#9654;</span>
          </div>
        </div>
        <div className="recipe-details">
          <h3 className="recipe-title">Butter Garlic Chicken</h3>
          <p className="recipe-author">
            By <span className="author-name">GARIMA KAPUR</span>
          </p>
          <p className="recipe-time">Total time: 20 mins</p>
          <p className="recipe-description">
            This easy garlic butter chicken recipe is a weeknight fave! Make
            perfect chicken breast with butter, garlic, and herbs, in just 20
            minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfTheWeek;