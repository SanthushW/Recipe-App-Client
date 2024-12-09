import React from "react";
import "../styles/Header.css";
import { CookingPot } from "lucide-react"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <CookingPot size={32} className="logo-icon" />
        <div className="logo">Kitchen Tales</div>
      </div>
      <div className="nav-login-container">
        <nav className="nav">
          <ul>
            <li>Recipes</li>
            <li>Articles</li>
            <li>About</li>
          </ul>
        </nav>
        <button className="login-btn">Login/Signup</button>
      </div>
    </header>
  );
};

export default Header;