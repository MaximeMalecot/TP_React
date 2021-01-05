import './App.css';
import Route from "./Components/Route"
import Home from "./Components/Home"
import Number from "./Components/Number"
import Header from "./Components/Header"
import Tracks from "./Components/FamousTrack"

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/number">
        <Number/>
      </Route>
      <Route path="/tracks">
        <Tracks/>
      </Route>
    </div>
  );
}

export default App;
