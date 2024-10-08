"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";
import { Bounce, JackInTheBox } from "react-awesome-reveal";

const Trophy = () => {
  return (
    <ParallaxBanner className="md:aspect-[2/1] min-h-screen">
      <ParallaxBannerLayer speed={-20}>
        <img src={homeData.trophies.image} alt="trophy" loading="lazy" className="w-full h-full object-top object-cover" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-20}>
        <div className="absolute top-1/4 mx-auto p-3">
          <div className="grid md:grid-cols-9 grid-cols-3 gap-2 gap-y-5 justify-center items-center md:w-full w-1/2">
            <Bounce cascade triggerOnce>
              {homeData.trophies.trophyItems.map((item) => (
                <div className="w-full" key={item.name}>
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
