"use client";

import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";

const Instagram = () => {
  return (
    <ParallaxBanner className="md:aspect-[2/1] min-h-screen">
      <ParallaxBannerLayer speed={-10}>
        <img src={homeData.instagram.image} alt="trophy" loading="lazy" className="w-full h-full object-top object-cover" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-25}>
        <div className="absolute inset-0 flex flex-col items-center justify-center max-w-7xl mx-auto p-3">
          <h1 className="md:text-h1 text-h2 text-white font-thin uppercase">{homeData.instagram.title}</h1>
          <button className="px-11 py-2 bg-primary text-white border-0 mt-3 font-light tracking-widest transition-colors duration-300 ease-in-out hover:bg-primaryDarker">
            <Link href={homeData.instagram.buttonLink} target="_blank" className="uppercase md:text-lg text-span">
              {homeData.instagram.buttonText}
            </Link>
          </button>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Instagram;
