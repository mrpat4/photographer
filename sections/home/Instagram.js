"use client";

import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";
import { homeData } from "../seeds";

const Instagram = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: homeData.instagram.image, speed: -10 },
        {
          speed: -25,
          children: (
            <div className="absolute inset-0 flex flex-col items-center justify-center max-w-7xl mx-auto p-3">
              <h1 className="text-white font-thin uppercase">{homeData.instagram.title}</h1>
              <button className="px-11 py-2 bg-primary text-white border-0 mt-3 font-light tracking-widest transition-colors duration-300 ease-in-out hover:bg-primaryDarker">
                <Link href={homeData.instagram.buttonLink} target="_blank" className="uppercase text-lg">
                  {homeData.instagram.buttonText}
                </Link>
              </button>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1] min-h-screen"
    />
  );
};

export default Instagram;
