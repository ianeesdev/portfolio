"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, sectionReveal, staggerContainer } from "@/utils/animation";
import ParticlesContainer from "./ParticlesContainer";
import AnimatedHeading from "./AnimatedHeading";
import GlowingButton from "./GlowingButton";
import { Link2Icon, Github, ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";

// import project data
import { projectData } from "@/lib/constants";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleThumbClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const openPreview = (project) => {
    setSelectedProject(project);
    setShowPreview(true);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setShowPreview(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="relative py-16 xl:py-28 overflow-hidden"
      id="work"
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

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-40 h-40 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto relative z-20">
        {/* Section title with animation */}
        <motion.div variants={fadeIn("down", 0.2)} className="text-center mb-16">
          <AnimatedHeading
            title="Latest Projects"
            as="h2"
            className="section-title mb-4 mx-auto"
            color="gradient"
            highlightWords={["Latest", "Projects"]}
          />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore my recent work and see how I've helped my clients achieve their goals
          </p>
        </motion.div>

        {/* Main content with improved layout */}
        <div className="flex flex-col items-center">
          {/* Featured projects carousel - improved 3D showcase */}
          <motion.div variants={fadeIn("up", 0.3)} className="w-full">
            <div className="relative">
              {/* Navigation arrows */}
              <div className="absolute top-1/2 -left-5 md:left-0 z-30 transform -translate-y-1/2">
                <button
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute top-1/2 -right-5 md:right-0 z-30 transform -translate-y-1/2">
                <button
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <Swiper
                ref={swiperRef}
                effect={"fade"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                fadeEffect={{
                  crossFade: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                  },
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={800}
                onSlideChange={handleSlideChange}
                className="project-swiper !pb-16 select-none"
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
              >
                {/* Show featured projects with enhanced cards */}
                {projectData.map((project, index) => (
                  <SwiperSlide key={index} className="!overflow-visible">
                    <EnhancedProjectCard
                      project={project}
                      index={index}
                      isActive={activeIndex === index}
                      onPreview={() => openPreview(project)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Interactive project thumbnails with active state indicators */}
            <motion.div variants={fadeIn("up", 0.5)} className="mt-6 flex justify-center gap-3 px-4 flex-wrap">
              {projectData.map((project, index) => (
                <motion.div
                  key={`thumb-${index}`}
                  onClick={() => handleThumbClick(index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-[70px] h-[50px] md:w-[100px] md:h-[60px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 z-10"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image src={project.image} alt={project.name} fill className="object-cover" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent ${
                        activeIndex === index ? "opacity-40" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* View all projects button */}
          <motion.div variants={fadeIn("up", 0.7)} className="mt-12 text-center">
            <Link href="/projects">
              <GlowingButton variant="primary" className="px-10">
                View All Projects <ExternalLink size={16} className="ml-2" />
              </GlowingButton>
            </Link>
          </motion.div>
        </div>

        {/* Decorative circles connecting to the next section */}
        <div className="relative mt-20 xl:mt-28">
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[120px] w-[200px] h-[200px] border border-primary/20 rounded-full opacity-40"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[100px] w-[160px] h-[160px] border border-primary/30 rounded-full opacity-50"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[80px] w-[120px] h-[120px] border border-primary/40 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Project preview modal */}
      <AnimatePresence>
        {showPreview && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-background rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[250px] md:h-[350px]">
                <Image src={selectedProject.image} fill alt={selectedProject.name} className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <button
                  onClick={closePreview}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium uppercase rounded-full bg-primary/10 text-primary">
                    {selectedProject.category}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-muted-foreground">{new Date().getFullYear()}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.name}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Next.js", "TailwindCSS", "JavaScript"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-primary text-white font-medium text-sm flex items-center gap-x-2 hover:bg-primary/90 transition-colors"
                  >
                    <Link2Icon size={16} /> Live Demo
                  </a>

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-white/10 text-white font-medium text-sm flex items-center gap-x-2 hover:bg-white/20 transition-colors"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

// Enhanced project card with 3D effects and animations
const EnhancedProjectCard = ({ project, index, isActive, onPreview }) => {
  return (
    <div className="relative h-[450px] md:h-[550px] w-full max-w-[1000px] mx-auto overflow-hidden rounded-xl group">
      {/* Animated background and parallax effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          scale: isActive ? 1 : 1.1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={project.image}
          fill
          priority
          alt={project.name}
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
      </motion.div>

      {/* Animated content with staggered animations */}
      <div className="relative h-full w-full flex flex-col justify-end p-6 md:p-10">
        {/* Category badge - floats in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-6 left-6"
        >
          <span className="px-3 py-1 text-xs font-medium uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary">
            {project.category}
          </span>
        </motion.div>

        {/* Preview button - floats in from top right */}
        <motion.button
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20, y: isActive ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onPreview();
          }}
        >
          <Maximize2 size={18} />
        </motion.button>

        {/* Project title with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-3"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-primary to-primary/40 transition-all duration-700 ease-out"></div>
        </motion.div>

        {/* Project description - fades in */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/80 text-base mb-6 max-w-[700px] line-clamp-3"
        >
          {project.description}
        </motion.p>

        {/* Tech stack pills - staggered appearance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {["React", "TailwindCSS", "Next.js"].map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Project links - appear with delay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-white font-medium text-sm flex items-center gap-x-2 hover:bg-primary transition-colors group-hover:scale-105 transition-transform duration-300"
          >
            <Link2Icon size={16} /> Live Demo
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm flex items-center gap-x-2 hover:bg-white/20 transition-colors group-hover:scale-105 transition-transform duration-300"
            >
              <Github size={16} /> Source Code
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;

// Add this to your global CSS
/*
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 1rem));
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
*/
