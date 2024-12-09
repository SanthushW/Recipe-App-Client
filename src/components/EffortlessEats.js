import React from "react";
import "../styles/EffortlessEats.css";
import imageFood from "../assets/food.jpg";

function EffortlessEats() {
  return (
    <section className="effortless-eats">
      <div className="effortless-header">
        <div className="header-row">
          <h2>Effortless Eats</h2>
          <a href="#" className="view-all-link">
            VIEW ALL RECIPES &rarr;
          </a>
        </div>
        <p className="description">
          Satisfy your cravings in a flash! Explore our Quick & Easy Meals for effortless recipes without compromising on mouthwatering taste.
        </p>
      </div>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="recipe-card">
          <img src={imageFood} alt="Egg Fried Rice" className="recipe-image" />
          <div className="card-content">
            <h3 className="recipe-title">Egg Fried Rice</h3>
            <p className="recipe-author">By <span>AMANDA SUAREZ</span></p>
            <p className="recipe-time">Total time: 15 mins</p>
            <p className="recipe-rating">⭐⭐⭐⭐⭐ (18)</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="recipe-card">
          <img
            src={imageFood}
            alt="Instant Pot Mac & Cheese"
            className="recipe-image"
          />
          <div className="card-content">
            <h3 className="recipe-title">Instant Pot Mac & Cheese</h3>
            <p className="recipe-author">By <span>ELLA QUITTNER</span></p>
            <p className="recipe-time">Total time: 20 mins</p>
            <p className="recipe-rating">⭐⭐⭐⭐⭐ (29)</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="recipe-card">
          <img
            src={imageFood}
            alt="French Bread Pepperoni Pizza"
            className="recipe-image"
          />
          <div className="card-content">
            <h3 className="recipe-title">French Bread Pepperoni Pizza</h3>
            <p className="recipe-author">By <span>MILTON CLARK</span></p>
            <p className="recipe-time">Total time: 25 mins</p>
            <p className="recipe-rating">⭐⭐⭐⭐⭐ (11)</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="recipe-card">
          <img
            src={imageFood}
            alt="Healthy Rice Cooker Garlic Shrimp with Chorizo"
            className="recipe-image"
          />
          <div className="card-content">
            <h3 className="recipe-title">Healthy Rice Cooker Garlic Shrimp with Chorizo</h3>
            <p className="recipe-author">By <span>EMILY WEINBERGER</span></p>
            <p className="recipe-time">Total time: 40 mins</p>
            <p className="recipe-rating">⭐⭐⭐⭐⭐ (33)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EffortlessEats;
