import { React, useEffect } from "react";

//tools
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//css
import "./about.scss";

const About = () => {
  //animation scrolltriger

  const { ref, inView } = useInView();
  const animation = useAnimation();

  const mView = window.innerWidth < 740;

  useEffect(() => {
    if (inView && !mView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }

    if (mView) {
      animation.start({ opacity: 1, x: 0 });
    }
  });

  //animation variants
  const apear = {
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="about-main"
      ref={ref}
      variants={apear}
      animate={animation}
    >
      <h1>About</h1>
      <div className="about-container">
        <p>
          Lorem ipsum est cillum labore qui non incididunt veniam magna enim
          duis labore do nostrud consectetur sit eu nisi consectetur aute
          laboris ullamco deserunt irure labore aute do nulla laboris proident
          ullamco anim cillum laborum aliqua ea laborum in voluptate esse
          voluptate in esse deserunt enim eu pariatur in minim voluptate labore
          tempor dolor consectetur deserunt elit proident ea incididunt ea magna
          culpa labore ad do esse eu dolor adipisicing ut enim deserunt non in
          reprehenderit deserunt aliquip adipisicing fugiat in ea et occaecat ex
          sint occaecat in in velit aliquip dolore eu in fugiat incididunt
          laboris ut consectetur et velit et in anim ullamco cillum enim
          reprehenderit minim est nostrud in nisi exercitation officia tempor
          magna in est in magna velit do adipisicing sit adipisicing in sit do
          do mollit proident dolor aliquip proident sit commodo pariatur officia
          in pariatur in commodo exercitation commodo qui nisi nulla proident
          veniam nostrud dolore sint esse velit in reprehenderit incididunt
          dolor non incididunt et est mollit dolore consequat proident ullamco
          ea ex eiusmod culpa ea proident nisi ad officia aute aliqua sed sit
          minim tempor dolore laborum qui pariatur id ut proident aliqua dolore
          laborum ullamco dolore culpa est enim in exercitation
        </p>
      </div>
    </motion.div>
  );
};

export default About;
