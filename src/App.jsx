import "./App.scss";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
