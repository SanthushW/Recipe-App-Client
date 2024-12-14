// src/pages/SearchResults.js
import React, { useState, useEffect } from "react";
import { searchRecipes } from "../api";
import RecipeGrid from "../components/RecipeGrid";

const SearchResults = () => {
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await searchRecipes(query);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, [query]);

  return (
    <div className="search-results">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <RecipeGrid recipes={recipes} />
    </div>
  );
};

export default SearchResults;

