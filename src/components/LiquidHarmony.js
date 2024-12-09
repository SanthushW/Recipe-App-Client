import React from "react";
import "../styles/LiquidHarmony.css";
import smokyCoconutJalapenoDrink from "../assets/spicy-coconut-maragrita.jpg";
import jalJeeraAmchurDrink from "../assets/Jal-Jeera.jpg";
import rumMixedDrinks from "../assets/rum-drinks.jpg";
import concordGrapeSmashDrink from "../assets/Concord-Grape-Smash-Drink.jpg";
import mangoPinaple from "../assets/PROD_Mango_Mint_Cooler.jpg";

const LiquidHarmony = () => {
  return (
    <section className="liquid-harmony">
      <div className="liquid-header">
        <div className="header-row">
          <h2>Liquid Harmony</h2>
          <a href="#" className="view-all-link">
            VIEW ALL RECIPES &rarr;
          </a>
        </div>
        <p className="description">
          Sip, savor, and celebrate! Discover a symphony of fruit-infused
          delights, refreshing mocktails, and spirited cocktails for every
          occasion.
        </p>
      </div>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="drink-card">
          <img
            src={smokyCoconutJalapenoDrink}
            alt="Smoky Coconut Jalapeno Mockerita"
            className="drink-image"
          />
          <div className="card-content">
            <h3 className="drink-title">Smoky Coconut Jalapeno Mockerita</h3>
            <p className="drink-author">By ANJALI HARKISHOR</p>
            <p className="drink-time">Total time: 10 mins</p>
            <p className="drink-rating">⭐⭐⭐⭐⭐ (20)</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="drink-card">
          <img
            src={jalJeeraAmchurDrink}
            alt="Jal Jeera (An Amchur Powder Drink)"
            className="drink-image"
          />
          <div className="card-content">
            <h3 className="drink-title">Jal Jeera (An Amchur Powder Drink)</h3>
            <p className="drink-author">By ANNADA RATHI</p>
            <p className="drink-time">Total time: 10 mins</p>
            <p className="drink-rating">⭐⭐⭐⭐⭐ (12)</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="drink-card">
          <img src={rumMixedDrinks} alt="Rum Mixed Drinks" className="drink-image" />
          <div className="card-content">
            <h3 className="drink-title">Rum Mixed Drinks</h3>
            <p className="drink-author">By BERLY'S KITCHEN</p>
            <p className="drink-time">Total time: 10 mins</p>
            <p className="drink-rating">⭐⭐⭐⭐⭐ (18)</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="drink-card">
          <img
            src={concordGrapeSmashDrink}
            alt="Concord Grape Smash Drink"
            className="drink-image"
          />
          <div className="card-content">
            <h3 className="drink-title">Concord Grape Smash Drink</h3>
            <p className="drink-author">By ERIK LOMBARDO</p>
            <p className="drink-time">Total time: 10 mins</p>
            <p className="drink-rating">⭐⭐⭐⭐⭐ (14)</p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="drink-card">
          <img
            src={mangoPinaple}
            alt="Mango Pineapple Cooler"
            className="drink-image"
          />
          <div className="card-content">
            <h3 className="drink-title">Mango Pineapple Cooler</h3>
            <p className="drink-author">By SOPHIA RIVERA</p>
            <p className="drink-time">Total time: 15 mins</p>
            <p className="drink-rating">⭐⭐⭐⭐ (23)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidHarmony;
