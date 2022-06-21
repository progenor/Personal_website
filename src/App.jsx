import React from "react";
import "./App.scss";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
