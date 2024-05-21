import Section from "./Section";
import Hero from "./Hero";
import MagicWnad from "./MagicWnad";
import Stars from "./Stars";
import Support from "./Support";
import Features from "./Features";

const Body = () => {
  return (
    <div className="w-[85%] m-auto">
      <Hero />
      <Stars />
      <MagicWnad/>
      <Section />
      <Support />
      <Features />
    </div>
  );
};

export default Body;
