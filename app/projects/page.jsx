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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
    link: "https://app.chadgpt.com/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "UnitFlix Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
    link: "https://unitflix-frontend.vercel.app/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "High End Care Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Be Well",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!",
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
