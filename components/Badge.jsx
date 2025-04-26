"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Badge = ({ containerStyles, icon, endCountNum, endCountText, badgeText }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
        className="text-3xl text-primary"
      >
        {icon}
      </motion.div>
      <div className="flex items-center gap-x-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl leading-none font-bold text-primary"
        >
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[70px] leading-none text-[15px] font-medium text-black"
        >
          {badgeText}
        </motion.div>
      </div>
    </div>
  );
};

export default Badge;
