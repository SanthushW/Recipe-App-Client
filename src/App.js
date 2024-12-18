import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import RecipeList from "./pages/RecipeList";
import "./App.css";
import AddRecipeForm from "./pages/AddRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AddRecipeForm />
      <Footer />
    </div>
  );
}

export default App;
