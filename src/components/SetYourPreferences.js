import React, { useState } from "react";
import "../styles/SetYourPreferences.css";

const SetYourPreferences = () => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const cuisines = [
    { name: "Italian", image: "https://via.placeholder.com/120?text=Italian" },
    { name: "Indian", image: "https://via.placeholder.com/120?text=Indian" },
    { name: "Asian", image: "https://via.placeholder.com/120?text=Asian" },
    { name: "Mediterranean", image: "https://via.placeholder.com/120?text=Mediterranean" },
    { name: "Middle Eastern", image: "https://via.placeholder.com/120?text=Middle+Eastern" },
    { name: "Mexican", image: "https://via.placeholder.com/120?text=Mexican" },
    { name: "African", image: "https://via.placeholder.com/120?text=African" },
    { name: "French", image: "https://via.placeholder.com/120?text=French" },
    { name: "American", image: "https://via.placeholder.com/120?text=American" },
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
