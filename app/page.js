import Parallax from "@/components/ParallaxSection";
import About from "@/sections/home/About";
import Contact from "@/sections/home/Contact";
import Hero from "@/sections/home/Hero";
import Images from "@/sections/home/Images";
import Instagram from "@/sections/home/Instagram";
import Trophy from "@/sections/home/Trophy";
import Videos from "@/sections/home/Videos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trophy />
      <Images />
      <About />
      <Instagram />
      <Videos />
      <Contact />
    </main>
  );
}
