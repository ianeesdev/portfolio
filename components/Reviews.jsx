"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, sectionReveal, staggerContainer } from "@/utils/animation";
import ParticlesContainer from "./ParticlesContainer";
import AnimatedHeading from "./AnimatedHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/female.webp",
    name: "Arooba Mazhar",
    job: "Manager - LantroTech",
    rating: 5,
    review:
      "As a marketing manager, I worked closely with Anees during his summer internship at Lantrotech as a web development intern. While students in internships are usually in a learning phase, Anees stood out as a very quick learner who effectively applied the concepts he learned in university. Anees demonstrated exceptional competence in front-end technologies, including HTML, CSS, and JavaScript. His ability to create functional, user-friendly web interfaces greatly enhanced our projects. One of his notable contributions was developing a payment gateway system for our international client, which he worked on alongside our senior web developer. Anees communicated effectively and was a proactive team player, contributing to a positive and productive work environment. His technical skills, strong work ethic, and positive attitude were greatly appreciated by the team. Overall, Anees's contributions were invaluable, and I highly recommend him for any web development role.",
  },
  {
    avatar: "/reviews/male.jpeg",
    name: "Muhammad Touseef",
    job: "Freelance Developer",
    rating: 5,
    review:
      "Muhammad Anees did an excellent job bringing our UI/UX design to life by developing a fantastic frontend dashboard for our web application. His coding skills and attention to detail ensured a seamless translation of the design concept into a functional and visually appealing interface. Great work!",
  },
  {
    avatar: "/reviews/male.jpeg",
    name: "Shabhi Ul Hassan",
    job: "Freelance Developer",
    rating: 5,
    review:
      "Working with Muhammad Anees was an absolute pleasure. He not only delivered the project on time but also went above and beyond in ensuring top-notch quality. Their attention to detail and dedication to meeting deadlines is commendable. I highly recommend Muhammad Anees for anyone seeking reliable and exceptional work. Looking forward to collaborating again in the future.",
  },
];

const Reviews = () => {
  const [showFullReview, setShowFullReview] = useState(Array(reviewsData.length).fill(false));
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card active
  const swiperRef = useRef(null);

  const toggleReview = (index) => {
    const newShowFullReview = [...showFullReview];
    newShowFullReview[index] = !newShowFullReview[index];
    setShowFullReview(newShowFullReview);
  };

  const truncateReview = (review, index) => {
    const words = review.split(" ");
    if (words.length <= 50 || showFullReview[index]) {
      return review;
    } else {
      return words.slice(0, 50).join(" ") + "...";
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Initialize the swiper with middle slide active
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Move to middle slide on initial load
      swiperRef.current.swiper.slideTo(1);
    }
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="relative py-16 xl:py-28 overflow-hidden"
      id="reviews"
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

      {/* Horizontal decorative line across the section */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto relative z-20">
        {/* Section title with animation */}
        <motion.div variants={fadeIn("down", 0.2)} className="text-center mb-16">
          <AnimatedHeading
            title="Client Reviews"
            as="h2"
            className="section-title mb-4 mx-auto"
            color="gradient"
            highlightWords={["Client", "Reviews"]}
          />
          <p className="text-muted-foreground max-w-lg mx-auto">
            See what clients and colleagues have to say about working with me
          </p>
        </motion.div>

        {/* Reviews slider */}
        <motion.div variants={fadeIn("up", 0.4)} className="relative">
          {/* Navigation arrows */}
          <div className="absolute top-1/2 -left-5 md:left-0 z-30 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-primary/80 hover:text-white transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-5 md:right-0 z-30 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-primary/80 hover:text-white transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 3,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSlideChange}
            className="reviews-swiper !overflow-visible !py-12"
            loop={true}
          >
            {reviewsData.map((person, index) => (
              <SwiperSlide
                key={index}
                className="!w-[85%] md:!w-[75%] lg:!w-[65%] !self-stretch !h-auto !transition-all !duration-500"
              >
                <ReviewCard
                  person={person}
                  index={index}
                  isActive={activeIndex === index}
                  showFullReview={showFullReview[index]}
                  toggleReview={() => toggleReview(index)}
                  truncateReview={(review) => truncateReview(review, index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Decorative circles connecting to the next section */}
      <div className="relative mt-12 xl:mt-24">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[120px] w-[200px] h-[200px] border border-primary/20 rounded-full opacity-40"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[100px] w-[160px] h-[160px] border border-primary/30 rounded-full opacity-50"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[80px] w-[120px] h-[120px] border border-primary/40 rounded-full opacity-60"></div>
      </div>
    </motion.section>
  );
};

// Enhanced review card component
const ReviewCard = ({ person, index, isActive, showFullReview, toggleReview, truncateReview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className={`h-full transition-all duration-500 ${isActive ? "scale-105 z-10" : "scale-95 opacity-80"}`}
    >
      <Card className="bg-[#262551]/50 dark:bg-[#1d1e38]/60 backdrop-blur-md border-t border-primary/20 h-full overflow-hidden relative group p-0 rounded-xl shadow-xl">
        {/* Quote decorations */}
        <div className="absolute top-6 left-6 text-primary/10 text-6xl font-serif rotate-180 leading-none">"</div>
        <div className="absolute bottom-6 right-6 text-primary/10 text-6xl font-serif leading-none">"</div>

        <CardContent className="p-8 md:p-10 h-full flex flex-col relative z-10">
          {/* Header with avatar and info */}
          <div className="flex items-center gap-x-4 mb-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isActive ? 1 : 0.9, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shrink-0 relative"
            >
              {/* Avatar with circle border */}
              <div className="relative">
                <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden border-2 border-primary/30 p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={person.avatar}
                      width={70}
                      height={70}
                      alt={`${person.name}'s avatar`}
                      className="object-cover w-full h-full rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.8, x: 0 }}
              transition={{ duration: 0.5, delay: isActive ? 0.3 : 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-bold text-white">{person.name}</h3>
              <p className="text-sm text-white/70">{person.job}</p>

              {/* Star rating */}
              <div className="flex mt-1">
                {[...Array(person.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Review text with read more/less functionality and staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: isActive ? 0.4 : 0.1 }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showFullReview ? "expanded" : "collapsed"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white/80 relative"
              >
                <p className="text-base leading-relaxed">{truncateReview(person.review)}</p>

                {person.review.split(" ").length > 50 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-medium mt-2 focus:outline-none"
                    onClick={toggleReview}
                  >
                    {showFullReview ? "Read Less" : "Read More"}
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </CardContent>

        {/* Bottom decorative gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      </Card>
    </motion.div>
  );
};

export default Reviews;
