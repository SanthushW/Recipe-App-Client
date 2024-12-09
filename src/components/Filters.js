import React from "react";
import "../styles/Filters.css";

const Filters = () => {
  return (
    <aside className="filters">
      <div className="filter-section">
        <h3 className="filter-title">Filter By</h3>
        <div className="filter-group">
          <h4 className="filter-group-title">Cuisine Types</h4>
          <ul className="filter-list">
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Italian
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Mexican
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Indian
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Asian
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Mediterranean
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> American
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Middle Eastern
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> African
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> French
            </li>
          </ul>
        </div>
        <div className="filter-group">
          <h4 className="filter-group-title">Diet Preferences</h4>
          <ul className="filter-list">
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Vegetarian
            </li>
            <li className="filter-item">
              <input type="checkbox" className="filter-checkbox" /> Vegan
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Filters;