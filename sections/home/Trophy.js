"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";

const Trophy = () => {
  return (
    <ParallaxBanner className="aspect-[2/1] min-h-[350px]">
      <ParallaxBannerLayer speed={-20}>
        <img
          src={homeData.trophies.image}
          alt="trophy"
          loading="lazy"
          style={{ objectFit: "cover", objectPosition: "top center", width: "100%", height: "100%" }}
        />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Trophy;
