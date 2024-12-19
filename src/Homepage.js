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
  // Add these lines at the top of your component
const [showFilters, setShowFilters] = useState(false);
const [selectedCuisine, setSelectedCuisine] = useState('');
const [items, setItems] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);
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

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
    filterItems(event.target.value, query);
  };

  const handleSearchClick = () => {
    filterItems(selectedCuisine, query);
  };

  const filterItems = (cuisine, searchQuery) => {
    let filtered = items;

    if (cuisine) {
      filtered = filtered.filter(item => item.cuisine.toLowerCase() === cuisine.toLowerCase());
    }

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
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
          
            <div>
      
      {showFilters && (
        <div className="filter-options">
          <label htmlFor="cuisine">Cuisine Type:</label>
          <select id="cuisine" value={selectedCuisine} onChange={handleCuisineChange}>
            <option value="">Select Cuisine</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            {/* Add more options as needed */}
          </select>
          {/* Add more filter categories as needed */}
        </div>
      )}
      {/* Render your filtered content here */}
    </div>
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="suggestions-list">
            {filteredItems.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.category} - {item.cuisine}</p>
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
