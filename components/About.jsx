import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
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
        university: "Punjab College of Information & Technology",
        qualification: "FSc. Pre-Engineering",
        years: "2018 - 2020",
      },
      {
        university: "Comsats University, Islamabad",
        qualification: "Bachelor of Computer Science",
        years: "2020 - 2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Axontick Technologies",
        qualification: "Jnr. Full Stack Engineer",
        years: "2023 - Present",
      },
      {
        company: "LantroTech",
        qualification: "Web Development Intern",
        years: "2023 - 2023",
      },
      {
        company: "Bytewise Limited",
        qualification: "MERN Stack Fellow",
        years: "2023 - 2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Front-end Development",
      },
      {
        name: "Back-end Development",
      },
      {
        name: "Javascript, Python",
      },
      {
        name: "HTML, CSS",
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
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {

  return <div>About</div>;
};

export default About;
