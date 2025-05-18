"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

import { projectData } from "@/lib/constants";

const uniqueCategories = ["all projects", ...new Set(projectData.map((items) => items.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto bg-background/50 backdrop-blur-sm border border-primary/20 dark:border-primary/10 rounded-full p-1">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  className="capitalize w-[162px] md:w-auto rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  value={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={project} index={index} />
              </TabsContent>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
