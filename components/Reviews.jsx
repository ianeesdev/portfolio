"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, sectionReveal } from "@/utils/animation";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/female.webp",
    name: "Arooba Mazhar",
    job: "Manager - LantroTech",
    review:
      "As a marketing manager, I worked closely with Anees during his summer internship at Lantrotech as a web development intern. While students in internships are usually in a learning phase, Anees stood out as a very quick learner who effectively applied the concepts he learned in university. Anees demonstrated exceptional competence in front-end technologies, including HTML, CSS, and JavaScript. His ability to create functional, user-friendly web interfaces greatly enhanced our projects. One of his notable contributions was developing a payment gateway system for our international client, which he worked on alongside our senior web developer. Anees communicated effectively and was a proactive team player, contributing to a positive and productive work environment. His technical skills, strong work ethic, and positive attitude were greatly appreciated by the team. Overall, Anees's contributions were invaluable, and I highly recommend him for any web development role.",
  },
  {
    avatar: "/reviews/male.jpeg",
    name: "Muhammad Touseef",
    job: "Freelance Developer",
    review:
      "Muhammad Anees did an excellent job bringing our UI/UX design to life by developing a fantastic frontend dashboard for our web application. His coding skills and attention to detail ensured a seamless translation of the design concept into a functional and visually appealing interface. Great work!",
  },
  {
    avatar: "/reviews/male.jpeg",
    name: "Shabhi Ul Hassan",
    job: "Freelance Developer",
    review:
      "Working with Muhammad Anees was an absolute pleasure. He not only delivered the project on time but also went above and beyond in ensuring top-notch quality. Their attention to detail and dedication to meeting deadlines is commendable. I highly recommend Muhammad Anees for anyone seeking reliable and exceptional work. Looking forward to collaborating again in the future.",
  },
];

const Reviews = () => {
  const [showFullReview, setShowFullReview] = useState(Array(reviewsData.length).fill(false));

  const toggleReview = (index) => {
    const newShowFullReview = [...showFullReview];
    newShowFullReview[index] = !newShowFullReview[index];
    setShowFullReview(newShowFullReview);
  };

  const truncateReview = (review, index) => {
    const words = review.split(" ");
    if (words.length <= 30 || showFullReview[index]) {
      return review;
    } else {
      return words.slice(0, 30).join(" ") + "...";
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="mb-12 xl:mb-32"
    >
      <div className="container mx-auto">
        <motion.h2 variants={fadeIn("up", 0.2)} className="section-title mb-12 text-center mx-auto">
          Reviews
        </motion.h2>
        {/* slider */}
        <motion.div variants={fadeIn("up", 0.4)}>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="min-h-[360px] md:min-h-[390px] lg:min-h-[370px]"
          >
            {reviewsData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-tertiary dark:bg-secondary/40 p-6 md:p-8 min-h-[300px]">
                      <CardHeader className="p-0 mb-5 lg:mb-10">
                        <div className="flex items-center gap-x-4">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                            viewport={{ once: true }}
                          >
                            <Image
                              src={`${person.avatar}`}
                              width={65}
                              height={65}
                              alt="person image"
                              className="rounded-full"
                              priority
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                          >
                            <CardTitle className="text-[18px] lg:text-[20px] xl:text-2xl">{person.name}</CardTitle>
                            <p className="text-[14px]">{person.job}</p>
                          </motion.div>
                        </div>
                      </CardHeader>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <CardDescription className="text-lg text-muted-foreground">
                          {truncateReview(person.review, index)}
                          {person.review.split(" ").length > 30 && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="text-primary ml-2"
                              onClick={() => toggleReview(index)}
                            >
                              {showFullReview[index] ? "Read Less" : "Read More"}
                            </motion.button>
                          )}
                        </CardDescription>
                      </motion.div>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reviews;
