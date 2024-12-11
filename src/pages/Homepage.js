import React from "react";
import { FaSearch } from "react-icons/fa"; 
import "../styles/HomeSearchBar.css";
import EffortlessEats from "../components/EffortlessEats";
import HealthyEatingInspiration from "../components/HealthyEatingInspiration";
import LiquidHarmony from "../components/LiquidHarmony";
import RecipeOfTheWeek from "../components/RecipeOfTheWeek";
import SetYourPreferences from "../components/SetYourPreferences";
import Showcase from "../components/Showcase";

function Homepage() {
  return (
    <div>
      <div className="search-bar">
        <div className="overlay"></div>
        <div className="search-bar-content">
          <h1 className="tagline">
            Fuel your body & soul
            <br />
            <span>Find recipes that taste amazing!</span>
          </h1>
          <div className="search-input-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by dish, ingredient, or cuisine..."
            />
          </div>
        </div>
      </div>
      <EffortlessEats />
      <HealthyEatingInspiration />
      <LiquidHarmony />
      <RecipeOfTheWeek />
      <SetYourPreferences />
      <Showcase />
    </div>
  );
}

export default Homepage;