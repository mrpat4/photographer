"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";

const Hero = () => {
  return (
    <ParallaxBanner className="aspect-[2/1] min-h-screen">
      <ParallaxBannerLayer speed={-30}>
        <img
          src={homeData.hero.image}
          alt="Him"
          loading="lazy"
          style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
        />
      </ParallaxBannerLayer>
      {/* <ParallaxBannerLayer speed={-30}>
        <div className="absolute inset-0 flex items-center justify-center max-w-7xl mx-auto p-3">
          <h1 className="md:text-h1 text-h2 text-white font-thin uppercase">{homeData.hero.title}</h1>
        </div>
      </ParallaxBannerLayer> */}
    </ParallaxBanner>
  );
};

export default Hero;
