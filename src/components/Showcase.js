import React from "react";
import "../styles/Showcase.css";
import italianDelights from "../assets/italian-delights.jpg";
import spiceUpYourPlate from "../assets/spice-up-your-plate.jpg";
import savorTheOrient from "../assets/savor-the-orient.jpg";

const Showcase = () => {
  const recipes = [
    {
      image: italianDelights,
      title: "Italian Delights: A Journey Through Classic Flavors",
      description: "Discover the heart of Italy with iconic dishes like pasta al pomodoro and tiramisu, bringing authentic Italian flavors to you.",
    },
    {
      image: spiceUpYourPlate,
      title: "Spice Up Your Plate: Exploring the Richness of Indian Cuisine",
      description: "Dive into the vibrant world of Indian cuisine with aromatic curries, flavorful biryanis, and delectable sweets that ignite the senses.",
    },
    {
      image: savorTheOrient,
      title: "Savor the Orient: Must-Try Dishes from Asian Kitchens",
      description: "Embark on a culinary adventure with Asian favorites like sushi, stir-fries, and dumplings—delicious treasures from diverse Asian cultures.",
    },
  ];

  return (
    <div className="showcase-container">
      <div className="showcase-header">
        <h2 className="showcase-title">International Flavor Showcase</h2>
        <a href="/all-recipes" className="showcase-view-all">
          VIEW ALL &rarr;
        </a>
      </div>
      <div className="showcase-grid">
        {recipes.map((recipe, index) => (
          <div className="showcase-card" key={index}>
            <img src={recipe.image} alt={recipe.title} className="showcase-image" />
            <div className="showcase-content">
              <h3 className="showcase-recipe-title">{recipe.title}</h3>
              <p className="showcase-recipe-description">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;