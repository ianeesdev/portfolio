"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

import TypewriterComponent from "typewriter-effect";
import { fadeIn, staggerContainer, buttonHover } from "@/utils/animation";

const Hero = () => {
  const titles = [
    "Software Engineer",
    ".NET Core",
    "MERN Stack",
    "NEXT JS",
    "Angular",
    "CI/CD Pipelines",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Redis",
    "WSO2",
  ];

  return (
    <section className="py-12 xl:py-24 h-full xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          animate="show"
          className="flex justify-between gap-x-8"
        >
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"
          >
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <TypewriterComponent
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 20,
                }}
              />
            </div>
            <h1 className="h1 xl:text-[68px] mb-4">Hello, My name is Muhammad Anees</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              A Software Engineer with a strong foundation in various web technologies and a commitment to continuous
              learning.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                  <Button className="gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </motion.div>
              </Link>
              <a href="/cv/Muhammad Anees_(Software Engineer)_Resume.pdf" download>
                <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                  <Button variant="secondary" className="gap-x-2">
                    Download CV <Download size={18} />
                  </Button>
                </motion.div>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="hidden md:flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </motion.div>
          {/* Image */}
          <motion.div variants={fadeIn("left", 0.4)} className="hidden xl:flex relative">
            {/* badge 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Badge
                containerStyles="absolute top-[24%] -left-[5rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={2}
                badgeText="Years Of Experience"
              />
            </motion.div>
            {/* badge 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Badge
                containerStyles="absolute top-[80%] -left-[1rem]"
                icon={<RiTodoFill />}
                endCountNum={15}
                endCountText="+"
                badgeText="Finished Projects"
              />
            </motion.div>
            {/* badge 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Badge
                containerStyles="absolute top-[55%] -right-8"
                icon={<RiTeamFill />}
                endCountNum={5}
                endCountText="+"
                badgeText="Happy Clients"
              />
            </motion.div>
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </motion.div>
        </motion.div>

        {/* icon */}
        <motion.div
          className="hidden xl:flex absolute left-2/4 xl:bottom-12"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
