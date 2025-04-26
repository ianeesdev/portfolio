import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, buttonHover, sectionReveal } from "@/utils/animation";

const Cta = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="py-24 bg-tertiary dark:bg-secondary/40"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.h2 variants={fadeIn("up", 0.2)} className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I'm here to help
          </motion.h2>
          <motion.div variants={fadeIn("up", 0.4)} whileHover="hover" whileTap="tap">
            <Link href="/contact">
              <motion.div variants={buttonHover}>
                <Button>Contact me</Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
