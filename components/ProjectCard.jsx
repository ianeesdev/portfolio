import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { fadeIn, iconHover } from "@/utils/animation";

const ProjectCard = ({ project, index = 0 }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [descriptionOverflow, setDescriptionOverflow] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionOverflow(descriptionRef.current.scrollHeight > 100);
    }
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.1 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Image
                className="absolute bottom-0 shadow-2xl"
                src={project.image}
                width={247}
                height={250}
                priority
                alt="project image"
              />
            </motion.div>
            <div className="flex gap-x-4">
              <motion.a
                whileHover="hover"
                variants={iconHover}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary size-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Link2Icon className="text-white" />
              </motion.a>
              {project.github !== "" && (
                <motion.a
                  whileHover="hover"
                  variants={iconHover}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary size-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                >
                  <Github className="text-white" />
                </motion.a>
              )}
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-5 md:px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.3 }}
            viewport={{ once: true }}
            className="h4 mb-1"
          >
            {project.name}
          </motion.h4>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.5 }}
            viewport={{ once: true }}
            ref={descriptionRef}
            className={`text-muted-foreground text-lg overflow-hidden transition-all duration-300 ease-in-out ${
              showFullDescription ? "max-h-[1000px]" : "max-h-[117px]"
            }`}
          >
            {project.description}
          </motion.div>
          {descriptionOverflow && (
            <motion.button whileHover={{ scale: 1.05 }} className="text-primary" onClick={toggleDescription}>
              {showFullDescription ? "Read Less" : "... Read More"}
            </motion.button>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
