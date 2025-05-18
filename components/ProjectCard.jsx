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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden relative bg-background/50 backdrop-blur-sm border border-primary/20 dark:border-primary/10 hover:border-primary/40 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative">
          {/* Image Container */}
          <div className="relative w-full h-[250px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
            <Image
              src={project.image}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              alt={project.name}
              priority
            />
            {/* Category Badge */}
            <Badge className="absolute top-4 left-4 z-20 uppercase text-sm font-medium bg-primary/90 text-primary-foreground hover:bg-primary transition-colors duration-300">
              {project.category}
            </Badge>
            {/* Social Links */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-x-3">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                variants={iconHover}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/90 hover:bg-primary size-[40px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-primary/30"
              >
                <Link2Icon className="text-primary-foreground size-5" />
              </motion.a>
              {project.github !== "" && (
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  variants={iconHover}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/90 hover:bg-primary size-[40px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  <Github className="text-primary-foreground size-5" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.3 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary/50 transition-all duration-300"
            >
              {project.name}
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
              viewport={{ once: true }}
              ref={descriptionRef}
              className={`text-muted-foreground text-base leading-relaxed overflow-hidden transition-all duration-300 ease-in-out group-hover:text-foreground/80 ${
                showFullDescription ? "max-h-[1000px]" : "max-h-[100px]"
              }`}
            >
              {project.description}
            </motion.div>
            {descriptionOverflow && (
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-primary hover:text-primary/80 transition-colors duration-300 mt-2 text-sm font-medium"
                onClick={toggleDescription}
              >
                {showFullDescription ? "Read Less" : "... Read More"}
              </motion.button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
