import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for chicken recipes..."
        className="search-input"
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;