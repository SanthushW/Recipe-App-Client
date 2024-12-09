import logo from './logo.svg';
import Header from "./components/Header";
import HomeSearchBar from "./components/HomeSearchBar";
import EffortlessEats from "./components/EffortlessEats";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSearchBar />
      <EffortlessEats />
    </div>
  );
}

export default App;
