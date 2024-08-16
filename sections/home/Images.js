"use client";

import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";
import { homeData } from "../seeds";

const Images = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: homeData.images.image, speed: -40 },
        {
          speed: -25,
          children: (
            <div className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto p-3">
              <h1 className="text-black font-thin uppercase">{homeData.images.title}</h1>
              <Link href={"/images"} className="group text-primary underline underline-offset-8 flex gap-2 items-end uppercase text-lg">
                {homeData.images.linkText}
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
          ),
        },
      ]}
      className="aspect-[2/1]"
    />
  );
};

export default Images;
