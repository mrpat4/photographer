"use client";

import { FiveHundred, Instagram, Telegram, Unsplash } from "@/components/Icons";
import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { homeData } from "../seeds";
import { useState } from "react";

const Contact = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <ParallaxBanner className="m-h-[600px] h-[650px] bg-white">
      <ParallaxBannerLayer speed={-20}>
        <div className="absolute inset-0 flex flex-col items-center justify-center max-w-7xl mx-auto p-3">
          <h1 className="md:text-h1 text-h2 group uppercase text-4xl hover:text-primary font-light transition-colors duration-300">
            {homeData.contact.phoneText}
            <span className="inline-block opacity-0 translate-y-5 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 text-4xl">
              !
            </span>
          </h1>
          <ul className="flex gap-10 mt-12">
            {homeData.contact.socials.map((item) => (
              <li key={item.name}>
                <a
                  href={item.address}
                  className={`hover:fill-primary transition-all duration-300 ${hoveredItem && hoveredItem !== item.name ? "opacity-20 " : ""}`}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  target="_blank"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Contact;
