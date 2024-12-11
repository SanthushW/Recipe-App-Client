import React from "react";
import HomeSearchBar from "../components/HomeSearchBar";
import EffortlessEats from "../components/EffortlessEats";
import HealthyEatingInspiration from "../components/HealthyEatingInspiration";
import LiquidHarmony from "../components/LiquidHarmony";
import RecipeOfTheWeek from "../components/RecipeOfTheWeek";
import SetYourPreferences from "../components/SetYourPreferences";
import Showcase from "../components/Showcase";

function Homepage() {
  return (
    <div>
      <HomeSearchBar />
      <EffortlessEats />
      <HealthyEatingInspiration />
      <LiquidHarmony />
      <RecipeOfTheWeek />
      <SetYourPreferences />
      <Showcase />
    </div>
  );
}

export default Homepage;