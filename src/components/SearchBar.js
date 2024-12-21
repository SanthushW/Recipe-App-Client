import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for chicken recipes..."
        className="search-input"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
