"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, buttonHover, sectionReveal } from "@/utils/animation";

// import swipper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

import { projectData } from "@/lib/constants";

const Work = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="relative mb-12 lg:min-h-[50vh] xl:mb-48"
    >
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore my recent work and see how I've helped my clients achieve their goals.
          </p>
          <Link href="/projects">
            <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
              <Button>All Projects</Button>
            </motion.div>
          </Link>
        </motion.div>
        {/* slider */}
        <motion.div variants={fadeIn("left", 0.4)} className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="min-h-[570px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
