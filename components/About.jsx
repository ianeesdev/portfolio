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

const qualificationData = [{
    
}];
const skillData = [];

const About = () => {
  return <div>About</div>;
};

export default About;
