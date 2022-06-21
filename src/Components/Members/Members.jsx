import React from "react";

//stuff
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//images
import img1 from "../../assets/img/programer.jpg";
import img2 from "../../assets/img/designer.png";

//css
import "./members.scss";

const Members = () => {
  //container animations trigger

  //   const { ref, inView } = useInView();

  //  container animations
  const leftContainer = {
    hidden: {
      opacity: 0,
      x: "-40vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  const rightContainer = {
    hidden: {
      opacity: 0,
      x: "40vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const line_fade = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <div className="members-main">
      <motion.div
        className="cont1 cont"
        variants={leftContainer}
        initial="hidden"
        animate="visible"
      >
        <h1>Lorbot</h1>
        <p className="status">CEO & Designer</p>
        <img src={img2} alt="designer" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi a
          numquam asperiores dolores, sit harum, obcaecati cumque consequuntur
          nihil fugit soluta quod consectetur voluptate voluptatibus architecto
          error quis? Debitis.
        </p>
      </motion.div>

      {/* ############## LINE ##################### */}

      <motion.div
        className="line"
        variants={line_fade}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* ############## LINE ##################### */}

      <motion.div
        className="cont2 cont"
        variants={rightContainer}
        initial="hidden"
        animate="visible"
      >
        <h1>Progenor</h1>
        <p className="status">COO & Full Stack Developer</p>
        <img src={img1} alt="programer" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
          accusamus in minima iure incidunt quas molestias cumque eveniet
          molestiae nostrum, porro, nulla unde itaque natus facere ratione
          quidem blanditiis?
        </p>
      </motion.div>
    </div>
  );
};

export default Members;
