import Hero from "./components/Hero";
import StackMarquee from "./components/StackMarquee";
import FeaturedProjects from "./components/Projects";
import Manifesto from "./components/Manifesto";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <FeaturedProjects />
      <Manifesto />
      <ContactCTA />
    </>
  );
}
