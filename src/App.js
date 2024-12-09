import logo from './logo.svg';
import Header from "./components/Header";
import HomeSearchBar from "./components/HomeSearchBar";
import EffortlessEats from "./components/EffortlessEats";
import HealthyEatingInspiration from "./components/HealthyEatingInspiration";
import LiquidHarmony from "./components/LiquidHarmony";
import RecipeOfTheWeek from "./components/RecipeOfTheWeek";
import SetYourPreferences from "./components/SetYourPreferences";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSearchBar />
      <EffortlessEats />
      <HealthyEatingInspiration />
      <LiquidHarmony />
      <RecipeOfTheWeek />
      <SetYourPreferences />
    </div>
  );
}

export default App;
