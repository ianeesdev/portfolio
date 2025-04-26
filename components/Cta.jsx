"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, sectionReveal, staggerContainer } from "@/utils/animation";
import ParticlesContainer from "./ParticlesContainer";
import AnimatedHeading from "./AnimatedHeading";
import GlowingButton from "./GlowingButton";
import { ArrowRight, Sparkles, Send, Clock, Code } from "lucide-react";

const Cta = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="relative py-20 lg:py-32 overflow-hidden"
      id="cta"
    >
      {/* Improved curved divider that properly completes the circle */}
      <div
        className="absolute top-0 left-0 right-0 h-[150px] overflow-hidden -z-[5]"
        style={{ transform: "translateY(-1px)" }}
      >
        <div className="w-[200%] h-[200px] absolute left-1/2 -translate-x-1/2 -top-[100px] rounded-[50%] bg-background"></div>
      </div>

      {/* Particles background for visual interest */}
      <ParticlesContainer />

      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
      <div className="absolute top-40 left-10 w-60 h-60 bg-gradient-animate rounded-full filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-animate rounded-full filter blur-3xl opacity-10 -z-10"></div>

      <div className="container mx-auto relative z-20">
        <motion.div
          variants={staggerContainer(0.3, 0.4)}
          className="max-w-5xl mx-auto bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 p-4 text-primary/20">
            <Sparkles size={80} strokeWidth={1} />
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-primary/20">
            <Code size={80} strokeWidth={1} />
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <motion.div variants={fadeIn("down", 0.2)} className="mb-3">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Let's Collaborate
              </span>
            </motion.div>

            <motion.div variants={fadeIn("up", 0.3)} className="mb-8">
              <AnimatedHeading
                title="Ready to Turn Your Ideas Into Reality?"
                as="h2"
                className="h2 max-w-2xl text-center mb-4"
                color="gradient"
                highlightWords={["Turn", "Ideas", "Reality"]}
              />
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                I'm here to help you build modern, responsive web applications that stand out from the crowd. Let's
                create something amazing together.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <Link href="/contact">
                <GlowingButton variant="primary" className="min-w-44">
                  Contact Me <Send size={16} className="ml-2" />
                </GlowingButton>
              </Link>
              <Link href="/projects">
                <GlowingButton variant="secondary" className="min-w-44">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </GlowingButton>
              </Link>
            </motion.div>

            {/* Response indicators */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="flex items-center gap-2 mt-8 text-sm text-muted-foreground"
            >
              <Clock size={14} />
              <span>Typically responds within 24 hours</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats section (optional) */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-12"
        >
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "5+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center px-4 py-6 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/5"
            >
              <span className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</span>
              <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cta;
