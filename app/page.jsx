import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Work = dynamic(() => import("@/components/Work"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const Cta = dynamic(() => import("@/components/Cta"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
