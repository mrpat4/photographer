"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Contact = () => {
  return (
    <ParallaxBanner className="h-[650px] bg-white">
      <ParallaxBannerLayer speed={-20}>
        <div className="absolute inset-0 flex items-center justify-center max-w-7xl mx-auto p-3">
          <h1 className="text-black font-thin">Contact</h1>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Contact;
