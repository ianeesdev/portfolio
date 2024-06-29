import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    description:
      "I specialize in creating responsive and user-friendly interfaces using React, Redux, Tailwind CSS and other modern frontend technologies. My goal is to deliver seamless and engaging user experiences.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    description:
      "I build robust and scalable backend systems using Node.js, Express, and databases (MongoDB, MySQL). My expertise includes creating REST APIs, integrating third-party services, and ensuring data integrity.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Deployment",
    description:
      "I manage deployment processes using Docker, AWS (EC2, S3, Elastic Beanstalk), and other DevOps tools to ensure your applications run smoothly and efficiently in production environments.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative transition-all duration-500 ease-in-out hover:scale-105"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
