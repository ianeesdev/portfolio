import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, sectionReveal, scaleAnimation, buttonHover } from "@/utils/animation";
import ParticlesContainer from "./ParticlesContainer";
import AnimatedHeading from "./AnimatedHeading";
import GlowingButton from "./GlowingButton";
import Link from "next/link";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  ChevronDown,
  ArrowDownCircle,
  Award,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Muhammad Anees",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 301 5316416",
  },
  {
    icon: <MailIcon size={20} />,
    text: "aneese421@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 16 Jul, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor's in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Islamabad",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Comsats University, Islamabad",
        qualification: "Bachelor of Computer Science",
        years: "2020 - 2024",
      },
      {
        university: "Punjab College of IT, Rwp",
        qualification: "FSc. Pre-Engineering",
        years: "2018 - 2020",
      },
      {
        university: "Allied School, P.D.Khan, Jhelum",
        qualification: "Matriculation",
        years: "2016 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "DPL, Islamabad",
        role: "Software Engineer",
        years: "Aug 2024 - Present",
      },
      {
        company: "Axontick Technologies, Remote",
        role: "Jnr. Full Stack Engineer",
        years: "Nov 2023 - Aug 2024",
      },
      {
        company: "LantroTech, Islamabad",
        role: "Web Development Intern",
        years: "Jul 2023 - Aug 2023",
      },
      // {
      //   company: "Bytewise Limited, Remote",
      //   role: "MERN Stack Fellow",
      //   years: "Apr 2023 - Jun 2023",
      // },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Modern Responsive Front-End Development",
      },
      {
        name: "Scalable & Secure Back-End Systems",
      },
      {
        name: "Efficient Containerization with Docker",
      },
      {
        name: "Cloud Deployment on Vercel & AWS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/react.svg",
      },
      {
        imgPath: "/about/node-js.svg",
      },
      {
        imgPath: "/about/redux.svg",
      },
      {
        imgPath: "/about/tailwind.svg",
      },
      {
        imgPath: "/about/mongodb.svg",
      },
      {
        imgPath: "/about/postgresql.svg",
      },
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/express.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/github.svg",
      },
      {
        imgPath: "/about/aws.svg",
      },
      {
        imgPath: "/about/aws-ec2.svg",
      },
      {
        imgPath: "/about/aws-s3.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="relative py-12 xl:py-24 bg-about_shape_light dark:bg-about_shape_dark bg-no-repeat bg-cover overflow-hidden"
    >
      {/* Particles background for visual interest */}
      <ParticlesContainer />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-animate rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto relative z-20">
        {/* Section title with animation */}
        <motion.div variants={fadeIn("down", 0.2)} className="text-center mb-12">
          <AnimatedHeading
            title="About me"
            as="h2"
            className="section-title mb-4 mx-auto"
            color="gradient"
            highlightWords={["About"]}
          />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Passionate software engineer crafting elegant solutions with modern technologies
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-x-16">
          {/* Image with animations and decorative elements */}
          <motion.div variants={fadeIn("right", 0.4)} className="hidden xl:flex flex-1 relative order-1 xl:order-none">
            {/* Enhanced background shape with subtle animation */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-[600px] h-[600px] border border-primary/10 rounded-full z-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {/* Second circle */}
              <motion.div
                className="w-[550px] h-[550px] border border-primary/20 rounded-full z-0 flex items-center justify-center relative"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                {/* Developer image with hover effect - now centered in the circle */}
                <div className="img-hover-zoom relative z-[2]">
                  <DevImg
                    containerStyles="w-[470px] h-[480px] bg-no-repeat relative bg-bottom"
                    imgSrc="/about/developer.png"
                  />
                </div>

                {/* Skill badge - animated and repositioned within the circles */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="animate-float absolute z-[3] top-[15%] left-[10%]"
                >
                  <div className="badge glass">
                    <div className="text-3xl text-primary">
                      <Award />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-secondary">Software Engineer</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tabs with enhanced visuals */}
          <motion.div variants={fadeIn("left", 0.5)} className="flex-1">
            <Tabs defaultValue="skills" className="relative">
              {/* Custom styling for tabs */}
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] rounded-full bg-white/10 backdrop-blur-sm p-1 mb-12 xl:mb-8 mx-auto xl:mx-0 relative overflow-hidden border dark:border-white/10">
                {/* Animated highlight for active tab */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/5 dark:bg-black/5 z-0"></div>

                <TabsTrigger
                  className="relative z-10 rounded-full text-sm py-2 px-4 font-medium transition-all"
                  value="skills"
                >
                  Skills & Tools
                </TabsTrigger>

                <TabsTrigger
                  className="relative z-10 rounded-full text-sm py-2 px-4 font-medium transition-all"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>

                <TabsTrigger
                  className="relative z-10 rounded-full text-sm py-2 px-4 font-medium transition-all"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
              </TabsList>

              {/* Tabs content with enhanced animations */}
              <div className="text-lg mt-8 xl:mt-8 min-h-[400px]">
                {/* Skills tab */}
                <TabsContent value="skills">
                  <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <h3 className="h3 mb-8 text-center xl:text-left">Technical Expertise</h3>
                    {/* Skills */}
                    <motion.div variants={fadeIn("up", 0.3)} className="mb-12">
                      <h4 className="text-xl font-semibold mb-4 text-primary inline-flex items-center gap-x-2">
                        Core Skills <ChevronDown size={20} />
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills list with animation */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getData(skillData, "skills").data.map((item, index) => (
                          <motion.div
                            variants={scaleAnimation(0.15 * index)}
                            key={index}
                            className="flex items-center gap-x-4 group"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <div className="group-hover:text-primary transition-colors">{item.name}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    {/* Tools */}
                    <motion.div variants={fadeIn("up", 0.5)}>
                      <h4 className="text-xl font-semibold mb-4 text-primary inline-flex items-center gap-x-2">
                        Technologies & Tools <ChevronDown size={20} />
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tools grid with hover effects */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {getData(skillData, "tools").data.map((item, index) => (
                          <motion.div
                            variants={scaleAnimation(0.05 * index)}
                            whileHover={{ y: -5 }}
                            key={index}
                            className="p-2 rounded-md border border-border bg-white/5 dark:bg-black/5 backdrop-blur-md flex items-center justify-center group"
                          >
                            <div className="relative w-10 h-10">
                              <Image
                                src={item.imgPath}
                                fill
                                alt=""
                                className="object-contain group-hover:scale-110 transition-transform"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>

                {/* Qualifications tab */}
                <TabsContent value="qualifications">
                  <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>

                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-8">
                      {/* Experience */}
                      <motion.div variants={fadeIn("right", 0.3)} className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase className="animate-pulse-slow" />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "experience").title}</h4>
                        </div>

                        {/* Timeline layout for experience */}
                        <div className="flex flex-col gap-y-6 relative border-l border-primary/30 pl-6">
                          {getData(qualificationData, "experience").data.map((item, index) => (
                            <motion.div variants={scaleAnimation(0.2 * index)} key={index} className="flex-1 relative">
                              {/* Timeline dot */}
                              <div className="w-3 h-3 rounded-full bg-primary absolute -left-[1.93rem]"></div>

                              {/* Card with gradient border */}
                              <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md p-4 rounded-lg border border-border relative overflow-hidden group">
                                {/* Subtle gradient highlight */}
                                <div className="absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                                <div className="font-semibold text-base">{item.role}</div>
                                <div className="text-sm">{item.company}</div>
                                <div className="text-xs text-muted-foreground">{item.years}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Education */}
                      <motion.div variants={fadeIn("left", 0.5)} className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap className="animate-pulse-slow" />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "education").title}</h4>
                        </div>

                        {/* Timeline layout for education */}
                        <div className="flex flex-col gap-y-6 relative border-l border-primary/30 pl-6">
                          {getData(qualificationData, "education").data.map((item, index) => (
                            <motion.div variants={scaleAnimation(0.2 * index)} key={index} className="flex-1 relative">
                              {/* Timeline dot */}
                              <div className="w-3 h-3 rounded-full bg-primary absolute -left-[1.93rem]"></div>

                              {/* Card with gradient border */}
                              <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md p-4 rounded-lg border border-border relative overflow-hidden group">
                                {/* Subtle gradient highlight */}
                                <div className="absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                                <div className="font-semibold text-base">{item.qualification}</div>
                                <div className="text-sm">{item.university}</div>
                                <div className="text-xs text-muted-foreground">{item.years}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* Personal tab */}
                <TabsContent value="personal">
                  <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center xl:text-left"
                  >
                    <h3 className="h3 mb-6">Software Engineer with 2+ Years Experience</h3>
                    <motion.p variants={fadeIn("up", 0.2)} className="subtitle max-w-xl mx-auto xl:mx-0 mb-8">
                      I specialize in crafting intuitive web experiences with modern technologies, focusing on
                      performance, accessibility, and clean code architecture.
                    </motion.p>

                    {/* Personal info grid */}
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12"
                    >
                      {infoData.map((item, index) => (
                        <motion.div
                          variants={scaleAnimation(0.15 * index)}
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0 group"
                        >
                          <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                          <div className="group-hover:text-primary transition-colors">{item.text}</div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Languages with enhanced styling */}
                    <motion.div variants={fadeIn("up", 0.4)} className="flex flex-col gap-y-2">
                      <div className="text-primary font-semibold">Languages</div>
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                      <div className="flex gap-x-4">
                        <span className="px-3 py-1 rounded-full bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-primary/20">
                          English
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-primary/20">
                          Urdu
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-primary/20">
                          Punjabi
                        </span>
                      </div>
                    </motion.div>

                    {/* Call to action button */}
                    <motion.div variants={fadeIn("up", 0.6)} className="mt-8 flex justify-center xl:justify-start">
                      <Link href="/contact">
                        <GlowingButton variant="primary">Contact Me</GlowingButton>
                      </Link>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="hidden xl:flex absolute left-2/4 bottom-8"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDownCircle className="text-3xl text-primary animate-pulse-slow" />
      </motion.div>
    </motion.section>
  );
};

export default About;
