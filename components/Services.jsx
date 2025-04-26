import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, sectionReveal, scaleAnimation, staggerContainer } from "@/utils/animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ParticlesContainer from "./ParticlesContainer";
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";

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
      className="relative py-12 xl:py-24 overflow-hidden"
      id="services"
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
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto relative z-20">
        {/* Section title with animation */}
        <motion.div variants={fadeIn("down", 0.2)} className="text-center mb-16">
          <AnimatedHeading
            title="My Services"
            as="h2"
            className="section-title mb-4 mx-auto"
            color="gradient"
            highlightWords={["Services"]}
          />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Professional solutions tailored to your specific needs
          </p>
        </motion.div>

        {/* Services grid with enhanced styling */}
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 justify-center"
        >
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * index)}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="w-full h-full"
            >
              {/* Enhanced card with glass effect and gradients */}
              <Card className="w-full h-full bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/10 dark:border-white/5 overflow-hidden relative group">
                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Animated icon container */}
                <CardHeader className="pt-12 flex flex-col items-center relative">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5, repeat: 0 },
                    }}
                    className="w-[100px] h-[100px] bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full flex justify-center items-center mb-4 relative overflow-hidden"
                  >
                    {/* Subtle gradient animation on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-primary relative z-10">{item.icon}</div>
                  </motion.div>

                  {/* Animated underline for title */}
                  <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300 relative">
                    {item.title}
                    <span className="block h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 transition-all duration-300 mt-1"></span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-base md:text-lg text-foreground/80">
                    {item.description}
                  </CardDescription>
                </CardContent>

                {/* Bottom decorative gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative circles connecting to the next section */}
        <div className="relative mt-24 xl:mt-36">
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[120px] w-[200px] h-[200px] border border-primary/20 rounded-full opacity-40"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[100px] w-[160px] h-[160px] border border-primary/30 rounded-full opacity-50"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[80px] w-[120px] h-[120px] border border-primary/40 rounded-full opacity-60"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
