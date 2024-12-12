import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import "./App.css";
import AddRecipeForm from "./pages/AddRecipe";

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
