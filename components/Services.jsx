import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, sectionReveal, scaleAnimation } from "@/utils/animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare className="size-10 md:size-[50px]" strokeWidth={0.8} />,
    title: "Frontend Development",
    description:
      "I specialize in creating responsive and user-friendly interfaces using React, Redux, Tailwind CSS and other modern frontend technologies. My goal is to deliver seamless and engaging user experiences.",
  },
  {
    icon: <Blocks className="size-10 md:size-[50px]" strokeWidth={0.8} />,
    title: "Backend Development",
    description:
      "I build robust and scalable backend systems using Node.js, Express, and MongoDB/MySQL. My expertise includes creating REST APIs, integrating third-party APIs, and ensuring data integrity.",
  },
  {
    icon: <Gem className="size-10 md:size-[50px]" strokeWidth={0.8} />,
    title: "Deployment",
    description:
      "I manage deployment processes using Docker, AWS (EC2, S3, Elastic Beanstalk), and other DevOps tools to ensure your applications run smoothly and efficiently in production environments.",
  },
];

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="mb-12 xl:mb-36"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div whileHover={{ y: -15, transition: { duration: 0.3 } }} className="w-full">
                  <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                    <CardHeader className="text-primary absolute -top-[50px] md:-top-[60px]">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 0.5, repeat: 0 },
                        }}
                        className="w-[80px] h-[40px] md:w-[140px] md:h-[80px] bg-white dark:bg-background flex justify-center items-center"
                      >
                        {item.icon}
                      </motion.div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="mb-4">{item.title}</CardTitle>
                      <CardDescription className="text-lg">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
