import React from "react";
import "../styles/HealthyEatingInspiration.css";
import healthyEating from "../assets/healthy-eating-inspiration.jpg";

const HealthyEatingInspiration = () => {
  const articles = [
    {
      title: "Delicious Dishes Packed with Nutrition",
      description: "Explore a collection of mouthwatering recipes that not only delight your taste buds but also pack a powerful nutritional punch.",
    },
    {
      title: "Fuel Your Day with Plant-Based Power",
      description: "Dive into the world of plant-based goodness with recipes that provide both energy and exceptional flavors, making each bite a celebration of health.",
    },
    {
      title: "One-Pan Wonders for Stress-Free Cooking",
      description: "Simplify your culinary journey with stress-free, one-pan wonders—recipes that prioritize convenience without compromising on nutritional value or taste.",
    },
  ];

  return (
    <div className="healthy-eating">
      <div className="section-header">
        <h2>Healthy Eating Inspiration</h2>
        <a href="/view-all" className="view-all-link">VIEW ALL &rarr;</a>
      </div>
      <div className="content-wrapper">
        <div className="image-container">
          <img
            src={healthyEating}
            alt="Healthy Eating Inspiration"
            className="healthy-eating-image"
          />
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <div className="article-item" key={index}>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              {index < articles.length - 1 && <hr className="divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthyEatingInspiration;