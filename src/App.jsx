import React from "react";
import "./App.scss";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Members from "./Components/Members/Members";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
    </div>
  );
}

export default App;
