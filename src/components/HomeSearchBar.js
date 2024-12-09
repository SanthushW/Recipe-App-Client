import React from "react";
import { FaSearch } from "react-icons/fa"; 
import "../styles/HomeSearchBar.css";

function HomeSearchBar() {
  return (
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
  );
}

export default HomeSearchBar;