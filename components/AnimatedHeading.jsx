"use client";

import { motion } from "framer-motion";

const AnimatedHeading = ({
  title,
  className = "",
  as: Component = "h2",
  color = "primary",
  delay = 0.1,
  highlightWords = [],
}) => {
  // Split the title into words to animate them separately
  const words = title.split(" ");

  // Container variant for staggered children
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i,
      },
    }),
  };

  // Child variant for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Check if a word is highlighted
  const isHighlighted = (word) => {
    return highlightWords.some((highlight) => word.toLowerCase().includes(highlight.toLowerCase()));
  };

  // Get text color class based on color prop
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "gradient":
        return "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500";
      default:
        return color;
    }
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Component className="inline-flex flex-wrap">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`inline-block mr-2 ${isHighlighted(word) ? getColorClass() : ""}`}
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
};

export default AnimatedHeading;
