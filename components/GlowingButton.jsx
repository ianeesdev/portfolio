"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonHover } from "@/utils/animation";

const GlowingButton = ({ href, children, className, onClick, download, variant = "primary" }) => {
  // Define styles based on variant
  const getStyles = () => {
    const baseStyles =
      "relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg";

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-opacity-90 shadow-primary/30",
      secondary: "bg-secondary text-white hover:bg-opacity-90 shadow-secondary/30",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    return `${baseStyles} ${variantStyles[variant]} ${className || ""}`;
  };

  // Determine if button should render as a Link or button
  const ButtonComponent = href ? Link : "button";
  const buttonProps = href ? { href } : { onClick };

  if (download) {
    buttonProps.download = true;
  }

  return (
    <motion.div className="relative group" whileHover="hover" whileTap="tap" variants={buttonHover}>
      {/* Glowing effect */}
      <span
        className={`absolute inset-0 rounded-full opacity-40 blur-xl transition-all duration-500 group-hover:opacity-100 ${
          variant === "primary" ? "bg-primary" : variant === "secondary" ? "bg-secondary" : "bg-primary"
        }`}
      ></span>

      <ButtonComponent className={getStyles()} {...buttonProps}>
        {/* Subtle shine effect */}
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute top-0 left-0 w-1/4 h-full bg-white/20 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[400%] transition-all duration-700"></span>
        </span>

        {children}
      </ButtonComponent>
    </motion.div>
  );
};

export default GlowingButton;
