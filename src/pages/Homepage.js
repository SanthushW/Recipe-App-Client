import React, { useState } from "react";
import EffortlessEats from "../components/EffortlessEats";
import HealthyEatingInspiration from "../components/HealthyEatingInspiration";
import LiquidHarmony from "../components/LiquidHarmony";
import RecipeOfTheWeek from "../components/RecipeOfTheWeek";
import SetYourPreferences from "../components/SetYourPreferences";
import Showcase from "../components/Showcase";
import { FaSearch } from "react-icons/fa";
import "../styles/HomeSearchBar.css";

function Homepage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const mockData = [
        { title: "Spaghetti Carbonara", category: "Pasta", cuisine: "Italian" },
        { title: "Chicken Tikka Masala", category: "Main Course", cuisine: "Indian" },
        { title: "Vegetable Stir Fry", category: "Vegetarian", cuisine: "Chinese" },
        { title: "Beef Tacos", category: "Fast Food", cuisine: "Mexican" },
        { title: "Margherita Pizza", category: "Pizza", cuisine: "Italian" },
        { title: "Chocolate Cake", category: "Dessert", cuisine: "American" },
        { title: "Caesar Salad", category: "Salad", cuisine: "American" },
        { title: "Sushi Rolls", category: "Appetizer", cuisine: "Japanese" },
        { title: "Grilled Cheese Sandwich", category: "Snack", cuisine: "American" },
        { title: "Egg Fried Rice", category: "Rice Dish", cuisine: "Chinese" },
        { title: "Lasagna", category: "Pasta", cuisine: "Italian" },
        { title: "Pad Thai", category: "Noodles", cuisine: "Thai" },
        { title: "Chili Con Carne", category: "Main Course", cuisine: "Mexican" },
      ];

      const filteredSuggestions = mockData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.cuisine.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions.slice(0, 10));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title); 
    setSuggestions([]); 
  };

  const handleSearchClick = () => {
    // add search logic here 
    console.log("Searching for:", query);
  };

  return (
    <div>
      <div className="homepage-container">
        <div className="search-bar">
          <div className="overlay"></div>
          <div className="search-bar-content">
            <h1 className="tagline">
              Fuel your body & soul
              <br />
              <span>Find recipes that taste amazing!</span>
            </h1>
            <div className="search-input-container">
              <FaSearch
                className="search-icon"
                onClick={handleSearchClick} 
              />
              <input
                type="text"
                className="search-input"
                placeholder="Search by dish, ingredient, or cuisine..."
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="suggestions-list">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(item)} 
              >
                {item.title}
              </div>
            ))}
          </div>
        )}

        <EffortlessEats />
        <HealthyEatingInspiration />
        <LiquidHarmony />
        <RecipeOfTheWeek />
        <SetYourPreferences />
        <Showcase />
      </div>
    </div>
  );
}

export default Homepage;
