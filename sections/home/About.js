"use client";

import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";

const About = () => {
  return (
    <ParallaxBanner className="md:aspect-[2/1] min-h-screen">
      <ParallaxBannerLayer speed={-30}>
        <img src={homeData.about.image} alt="trophy" loading="lazy" className="w-full h-full object-top object-cover" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-25}>
        <div className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto p-3">
          <h1 className="md:text-h1 text-h2 text-black font-thin uppercase">{homeData.about.title}</h1>
          <Link href={"/about"} className="group text-primary uppercase underline underline-offset-8 flex gap-2 items-end md:text-lg text-span">
            {homeData.about.linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 pt-2 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default About;
