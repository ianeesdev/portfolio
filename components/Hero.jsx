"use client";

import Link from "next/link";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import ParticlesContainer from "./ParticlesContainer";
import AnimatedHeading from "./AnimatedHeading";
import GlowingButton from "./GlowingButton";

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
    <section className="relative py-12 xl:py-24 h-full xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none overflow-hidden">
      {/* Particles background */}
      <ParticlesContainer />

      <div className="container mx-auto relative z-20">
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
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] neon-text">
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

            {/* Animated heading instead of static h1 */}
            <div className="mb-4">
              <AnimatedHeading
                title="Hello, My name is Muhammad Anees"
                as="h1"
                className="h1 xl:text-[68px]"
                color="gradient"
                highlightWords={["Muhammad", "Anees"]}
              />
            </div>

            <motion.p variants={fadeIn("up", 0.5)} className="subtitle max-w-[490px] mx-auto xl:mx-0">
              A Software Engineer with a strong foundation in various web technologies and a commitment to continuous
              learning.
            </motion.p>

            {/* buttons with new glowing effect */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
            >
              <Link href="/contact">
                <GlowingButton variant="primary">
                  Contact me <Send size={18} className="ml-2" />
                </GlowingButton>
              </Link>
              <a href="/cv/Muhammad Anees_(Software Engineer)_Resume.pdf" download>
                <GlowingButton variant="secondary">
                  Download CV <Download size={18} className="ml-2" />
                </GlowingButton>
              </a>
            </motion.div>

            {/* socials */}
            <Socials
              containerStyles="hidden md:flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </motion.div>

          {/* Image with enhanced animations */}
          <motion.div variants={fadeIn("left", 0.4)} className="hidden xl:flex relative">
            {/* Enhanced background shape with subtle animation */}
            <motion.div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 z-[1]"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Developer image with hover effect */}
            <div className="img-hover-zoom relative z-[2]">
              <DevImg
                containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/developer.png"
              />
            </div>

            {/* Years of Experience badge - top left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="animate-float absolute z-[3] top-[15%] -left-[2rem]"
            >
              <Badge
                containerStyles="glass"
                icon={<RiBriefcase4Fill />}
                endCountNum={2}
                badgeText="Years Of Experience"
              />
            </motion.div>

            {/* Finished Projects badge - bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="animate-float absolute z-[3] bottom-[25%] -left-[1rem]"
              style={{ animationDelay: "0.5s" }}
            >
              <Badge
                containerStyles="glass"
                icon={<RiTodoFill />}
                endCountNum={15}
                endCountText="+"
                badgeText="Finished Projects"
              />
            </motion.div>

            {/* Happy Clients badge - top right */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="animate-float absolute z-[3] top-[40%] -right-[1rem]"
              style={{ animationDelay: "1s" }}
            >
              <Badge
                containerStyles="glass"
                icon={<RiTeamFill />}
                endCountNum={5}
                endCountText="+"
                badgeText="Happy Clients"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll down icon */}
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
          <RiArrowDownSLine className="text-3xl text-primary animate-pulse-slow" />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;
