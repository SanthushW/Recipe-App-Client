import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage"; 
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;