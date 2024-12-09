import React from "react";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="card-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="rating">
          <span className="rating-value">{recipe.rating}</span>
          <span className="rating-text">({recipe.reviews} reviews)</span>
        </div>
      </div>
      <div className="card-details">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-author">By {recipe.author}</p>
        <p className="recipe-time">Total time: {recipe.time}</p>
      </div>
    </div>
  );
};

export default RecipeCard;