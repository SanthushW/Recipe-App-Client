import React from "react";
import "../styles/EffortlessEats.css";
import imageFood from "../assets/food.jpg";
import eggFriedRice from "../assets/egg-fried-rice.jpg";
import macAndCheese from "../assets/mac-and-cheese.jpg";
import frenchBreadMacPizza from "../assets/french-bread-pepperoni-pizza.jpg";
import prawnsRice from "../assets/prawns-and-rice.jpg";
import garlicPasta from "../assets/233312creamy-garlic-chicken-pasta.jpg";

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
        <div className="meal-card">
          <img src={eggFriedRice} alt="Egg Fried Rice" className="meal-image" />
          <div className="card-content">
            <h3 className="meal-title">Egg Fried Rice</h3>
            <p className="meal-author">By AMANDA SUAREZ</p>
            <p className="meal-time">Total time: 15 mins</p>
            <p className="meal-rating">⭐⭐⭐⭐⭐ (18)</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="meal-card">
          <img
            src={macAndCheese}
            alt="Instant Pot Mac & Cheese"
            className="meal-image"
          />
          <div className="card-content">
            <h3 className="meal-title">Instant Pot Mac & Cheese</h3>
            <p className="meal-author">By ELLA QUITTNER</p>
            <p className="meal-time">Total time: 20 mins</p>
            <p className="meal-rating">⭐⭐⭐⭐⭐ (29)</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="meal-card">
          <img
            src={frenchBreadMacPizza}
            alt="French Bread Pepperoni Pizza"
            className="meal-image"
          />
          <div className="card-content">
            <h3 className="meal-title">French Bread Pepperoni Pizza</h3>
            <p className="meal-author">By MILTON CLARK</p>
            <p className="meal-time">Total time: 25 mins</p>
            <p className="meal-rating">⭐⭐⭐⭐⭐ (11)</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="meal-card">
          <img
            src={prawnsRice}
            alt="Healthy Rice Cooker Garlic Shrimp with Chorizo"
            className="meal-image"
          />
          <div className="card-content">
            <h3 className="meal-title">
              Healthy Rice Cooker Garlic Shrimp with Chorizo
            </h3>
            <p className="meal-author">By EMILY WEINBERGER</p>
            <p className="meal-time">Total time: 40 mins</p>
            <p className="meal-rating">⭐⭐⭐⭐⭐ (33)</p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="meal-card">
          <img
            src={garlicPasta}
            alt="Creamy Garlic Chicken Pasta"
            className="meal-image"
          />
          <div className="card-content">
            <h3 className="meal-title">Creamy Garlic Chicken Pasta</h3>
            <p className="meal-author">By ALEXANDRA GREEN</p>
            <p className="meal-time">Total time: 25 mins</p>
            <p className="meal-rating">⭐⭐⭐⭐ (45)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EffortlessEats;
