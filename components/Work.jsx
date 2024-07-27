"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swipper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Photonbrains",
    description:
      "Developed a fully responsive MERN stack portfolio website for PhotonBrains. Built an admin panel to manage images, videos, blogs and other website content. Enabled language support for English and German. Used lazy loading to cut initial load time by 40%, boosting user engagement.",
    link: "https://photonbrains.com/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Allergaurd Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
    link: "https://allergaurd-website.vercel.app/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "ChadGPT",
    description:
      "An AI assistant serving 3,000+ users, integrating ChatGPT, Claude Opus, Llama 3, and DALL-E with seamless modality switching. I developed the responsive React frontend and managed API integration. Features include drag-and-drop chat management, predefined prompts for social media, SEO, emails, personas, and more. Users can also save and manage their own prompts.",
    link: "https://app.chadgpt.com/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "UnitFlix Website",
    description:
      "A real estate site for Dubai properties. Users can explore, add, and view listings. I built the responsive frontend with React, using best practices like lazy loading, suspense, custom hooks, and code splitting.",
    link: "https://unitflix-frontend.vercel.app/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "High End Care Website",
    description:
      "An insurance platform for watches, jewelry, and bags where users upload item details. User risk is calculated during get started process. Low-risk users follow a standard flow; high-risk requests require admin verification. Developed website and admin panel using MERN stack with Stripe integration. Implemented JWT tokens, password hashing, code splitting, reusable components, and robust error handling.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Insetik Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Threads Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Genius - AI Platform",
    description:
      "A NextJS platform with Prisma database that uses OpenAI & replicate AI API to offer 5 AI services, Conversation, Image, Code, Video, and Audio generation. User trials and subscription payments via Stripe.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Be Well",
    description:
      "A comprehensive mental health platform featuring modules for user profiling, assessment, appointment booking, payment processing, health tracking, recommendations, resources, community forums, AI chatbot, and admin management. Empowering users to access support, assessment tools, appointments, resources, and community engagement in one integrated platform.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 lg:min-h-[50vh] xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            in?
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="min-h-[480px]"
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
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
