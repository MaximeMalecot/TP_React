import './App.css';
import Route from "./Components/Route"
import Home from "./Components/Home"
import CocktailDB from "./Components/CocktailDB"
import Header from "./Components/Header"
import Tracks from "./Components/FamousTrack"
import Info from "./Components/Info"
import Cocktail from "./Components/Cocktail"
import Mix from "./Components/Mix"

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/cocktaildb">
        <CocktailDB/>
      </Route>
      <Route path="/tracks">
        <Tracks/>
      </Route>
      <Route path="/info">
        <Info/>
      </Route>
      <Route path="/cocktail">
        <Cocktail/>
      </Route>
      <Route path="/mix">
        <Mix/>
      </Route>
    </div>
  );
}

export default App;
