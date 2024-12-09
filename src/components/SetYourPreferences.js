import React, { useState } from "react";
import "../styles/SetYourPreferences.css";

import Italian from "../assets/cuisines/italian.jpg";
import Indian from "../assets/cuisines/indian.jpg";
import Asian from "../assets/cuisines/asian.jpg";
import Mediterranean from "../assets/cuisines/mediterranean.jpg";
import MiddleEastern from "../assets/cuisines/middle-estern.jpg";
import Mexican from "../assets/cuisines/mexican.jpg";
import African from "../assets/cuisines/african.jpg";
import French from "../assets/cuisines/french.jpg";
import American from "../assets/cuisines/american.jpg";


const SetYourPreferences = () => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const cuisines = [
    { name: "Italian", image: Italian},
    { name: "Indian", image: Indian},
    { name: "Asian", image: Asian },
    { name: "Mediterranean", image: Mediterranean },
    { name: "Middle Eastern", image: MiddleEastern },
    { name: "Mexican", image: Mexican },
    { name: "African", image: African },
    { name: "French", image: French },
    { name: "American", image: American },
  ];

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prevSelected) =>
      prevSelected.includes(cuisine)
        ? prevSelected.filter((item) => item !== cuisine)
        : [...prevSelected, cuisine]
    );
  };

  const handleNext = () => {
    console.log("Selected Cuisines:", selectedCuisines);
    alert("Next page will be implemented.");
  };

  return (
    <div className="preferences-container">
      {/* Text Section */}
      <div className="text-section">
        <h1 className="heading">Set Your Preferences</h1>
        <p className="description">
          Craft your personalized experience! Set your preferences to tailor
          content, ensuring a delightful journey that matches your unique tastes
          and culinary desires.
        </p>
      </div>

      {/* Image Section with Overlay */}
      <div className="image-overlay">
        <div className="cuisine-selection">
          <h2 className="cuisine-title">What are your favorite cuisines?</h2>
          <div className="cuisine-options">
            {cuisines.map((cuisine, index) => (
              <div
                key={index}
                className={`cuisine-card ${
                  selectedCuisines.includes(cuisine.name) ? "selected" : ""
                }`}
                onClick={() => toggleCuisine(cuisine.name)}
              >
                <div className="cuisine-image">
                  <img src={cuisine.image} alt={cuisine.name} />
                </div>
                <p className="cuisine-name">{cuisine.name}</p>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetYourPreferences;
