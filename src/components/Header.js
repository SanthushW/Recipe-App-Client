import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🍴</span> Kitchen Tales
        </div>
        <nav className="nav">
          <a href="#">Recipes</a>
          <a href="#">Articles</a>
          <a href="#">About</a>
        </nav>
        <div className="nav-right">
          <button className="add-recipe">+ Add a Recipe</button>
          <button className="login">Login/Signup</button>
        </div>
      </div>
      <div className="sub-nav">
        <a href="#">Popular</a>
        <a href="#">Ingredients</a>
        <a href="#">Meals & Dishes</a>
        <a href="#">Diets</a>
        <a href="#">Occasions</a>
      </div>
    </header>
  );
}

export default Header;
