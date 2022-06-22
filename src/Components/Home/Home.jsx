import { React, useState, useEffect } from "react";

//tools
import { motion } from "framer-motion";

//CSS
import "./home.css";

//images
import img from "../../assets/logo.jpg";

function Home() {
  //rotate
  const sw_circle = () => {
    const toggle = document.querySelector(".hover-show");
    toggle.classList.toggle("active");
  };

  //click me text
  const [show_click, setShow_click] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow_click(true);
      setTimeout(() => {
        setShow_click(false);
      }, 3000);
    }, 2000);
  }, []);

  return (
    <div id="home" className="container home-container">
      <div className="logo" onClick={show_click}>
        {show_click ? (
          <motion.span className="cl-me" animate={{ rotate: [10, -10] }}>
            Click Me
          </motion.span>
        ) : (
          ""
        )}
        <div className="hover-show" onClick={sw_circle}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Home;
