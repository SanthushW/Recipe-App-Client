import React from "react";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";
import "./styles/App.css";

import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import img5 from "./assets/images/img5.png";
import img6 from "./assets/images/img6.png";
import img7 from "./assets/images/img7.png";
import img8 from "./assets/images/img8.png";
import img9 from "./assets/images/img9.png";
import img10 from "./assets/images/img10.png";
import img11 from "./assets/images/img11.png";
import img12 from "./assets/images/img12.png";
import img13 from "./assets/images/img13.png";
import img14 from "./assets/images/img14.png";
import img15 from "./assets/images/img15.png";
//recipies
const recipes = [
  {
    title: "Chicken Makhani (Indian Butter Chicken)",
    author: "TARLA DALAL",
    time: "35 mins",
    rating: 4.2,
    reviews: 42,
    image: img1,
  },
  {
    title: "Baked Teriyaki Chicken",
    author: "LISA NGUYEN",
    time: "1 hr 5 mins",
    rating: 4.1,
    reviews: 38,
    image: img2,
  },
  {
    title: "Easy White Chicken Chili",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.1,
    reviews: 43,
    image: img3,
  },
  {
    title: "Chicken Spaghetti",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.2,
    reviews: 33,
    image: img4,
  },
  {
    title: "Chicken Biriyani",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.0,
    reviews: 53,
    image: img5,
  },
  {
    title: "Korean Fried Chicken",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.0,
    reviews: 33,
    image: img6,
  },
  {
    title: "Barccoli Chicken Casserole",
    author: "EPHESIS",
    time: "20 mins",
    rating: 4.6,
    reviews: 63,
    image: img7,
  },
  {
    title: "Quick and Easy Chicken Noddle Soup",
    author: "EPHESIS",
    time: "60 mins",
    rating: 4.6,
    reviews: 65,
    image: img8,
  },
  {
    title: "Chicken Stew",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.0,
    reviews: 33,
    image: img9,
  },
  {
    title: "Chicken Parmesan",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.0,
    reviews: 33,
    image: img10,
  },
  {
    title: "Slow Cooker Chicken Tacos",
    author: "EPHESIS",
    time: "50 mins",
    rating: 3.0,
    reviews: 33,
    image: img11,
  },
  {
    title: "Palak Chicken",
    author: "EPHESIS",
    time: "70 mins",
    rating: 4.2,
    reviews: 54,
    image: img12,
  },
  {
    title: "Creamy Chicken and Rice",
    author: "EPHESIS",
    time: "50 mins",
    rating: 4.4,
    reviews: 90,
    image: img13,
  },
  {
    title: "Crispy Fried Chicken",
    author: "EPHESIS",
    time: "90 mins",
    rating: 4.8,
    reviews: 78,
    image: img14,
  },
  {
    title: "Best Chicken Salad",
    author: "EPHESIS",
    time: "75 mins",
    rating: 4.0,
    reviews: 47,
    image:img15,
  },
  
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <Breadcrumb />
      <SearchBar />
      <div className="content">
        <Filters />
        <div className="recipes-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
