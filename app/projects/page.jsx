"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((items) => items.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                  value={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
