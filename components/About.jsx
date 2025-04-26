import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, sectionReveal, scaleAnimation } from "@/utils/animation";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

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
      className="xl:h-[860px] pb-12 xl:py-24"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <motion.div variants={fadeIn("right", 0.4)} className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles="w-[520px] h-[530px] bg-left bg-no-repeat relative" imgSrc="/about/developer.png" />
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeIn("left", 0.5)} className="flex-1">
            <Tabs defaultValue="skills">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>

                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
              </TabsList>
              {/* Tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center xl:text-left"
                  >
                    <h3 className="h3 mb-4">Unmatched Service Quality for over 2 Years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and
                      engaging user experiences.
                    </p>
                    {/* Icons */}
                    <motion.div variants={fadeIn("up", 0.3)} className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <motion.div
                          variants={scaleAnimation(0.15 * index)}
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                    {/* Languages */}
                    <motion.div variants={fadeIn("up", 0.4)} className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu, Punjabi</div>
                    </motion.div>
                  </motion.div>
                </TabsContent>

                {/* qualifications */}
                <TabsContent value="qualifications">
                  <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-4">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "experience").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <motion.div
                                variants={fadeIn("up", 0.2 * index)}
                                key={index}
                                className="flex gap-x-8 group"
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "education").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <motion.div
                                variants={fadeIn("down", 0.2 * index)}
                                key={index}
                                className="flex gap-x-8 group"
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* skill list */}
                <TabsContent value="skills">
                  <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center xl:text-left"
                  >
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* tools */}
                    <div className="mb-12">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools & Technologies</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex flex-wrap gap-8 justify-center xl:justify-between">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <motion.div variants={scaleAnimation(0.1 * index)} key={index}>
                              <Image
                                src={imgPath}
                                width={50}
                                height={50}
                                alt="tools image"
                                className="transition-all duration-300 hover:scale-110"
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                    {/* skills */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list*/}
                      <div>
                        {getData(skillData, "skills").data.map((item, index) => {
                          const { name } = item;
                          return (
                            <motion.div
                              variants={fadeIn("up", 0.2 * index)}
                              key={index}
                              className="text-center xl:text-left mx-auto xl:mx-0"
                            >
                              <div className="font-medium">{name}</div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
