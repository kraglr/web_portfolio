import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, direction = "right", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  // Determine initial and exit values based on direction
  const getAxisValues = (dir) => {
    switch (dir) {
      case "left":
        return { initial: { x: -30, y: 0 }, exit: { x: 30, y: 0 } };
      case "right":
        return { initial: { x: 30, y: 0 }, exit: { x: -30, y: 0 } };
      case "top":
        return { initial: { x: 0, y: -30 }, exit: { x: 0, y: 30 } };
      case "down":
        return { initial: { x: 0, y: 30 }, exit: { x: 0, y: -30 } };
      default:
        return { initial: { x: 30, y: 0 }, exit: { x: -30, y: 0 } }; // default to right
    }
  };

  const { initial, exit } = getAxisValues(direction);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay },
      });
    } else {
      controls.start({
        opacity: 0,
        x: exit.x,
        y: exit.y,
        transition: { duration: 0.8, ease: "easeIn" },
      });
    }
  }, [inView, controls, delay, exit.x, exit.y]);

  return (
    <motion.div
      className="w-full"
      ref={ref}
      initial={{ opacity: 0, x: initial.x, y: initial.y }}
      animate={controls}
      exit={{ opacity: 0, x: exit.x, y: exit.y }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
