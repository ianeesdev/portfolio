import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
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
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            priority
            alt="project image"
          />
          <div className="flex gap-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary size-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Link2Icon className="text-white" />
            </a>
            {project.github !== "" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary size-[50px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Github className="text-white" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-5 md:px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <div
          ref={descriptionRef}
          className={`text-muted-foreground text-lg overflow-hidden transition-all duration-300 ease-in-out ${showFullDescription ? "max-h-[1000px]" : "max-h-[117px]"}`}
        >
          {project.description}
        </div>
        {descriptionOverflow && (
          <button
            className="text-primary"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Read Less" : "... Read More"}
          </button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
