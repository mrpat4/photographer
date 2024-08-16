"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";
import { Bounce, JackInTheBox } from "react-awesome-reveal";

const Trophy = () => {
  return (
    <ParallaxBanner className="aspect-[2/1] min-h-[400px]">
      <ParallaxBannerLayer speed={-20}>
        <img
          src={homeData.trophies.image}
          alt="trophy"
          loading="lazy"
          style={{ objectFit: "cover", objectPosition: "top center", width: "100%", height: "100%" }}
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-20}>
        <div className="absolute top-1/4 mx-auto p-3">
          <div className="grid grid-cols-9 gap-2 gap-y-5 justify-center items-center w-full">
            <Bounce cascade triggerOnce>
              {homeData.trophies.trophyItems.map((item) => (
                <div className="w-full">
                  <img key={item.name} src={item.image} alt={item.name} className="w-full" />
                </div>
              ))}
            </Bounce>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Trophy;
