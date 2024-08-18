"use client";
import { useState } from "react";
import { aboutData, homeData } from "../seeds";

const AboutSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-3">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col w-1/2">
          <h1 className="font-light">{aboutData.title}</h1>
          <em className="whitespace-pre-wrap italic tracking-widest leading-7 font-light text-justify">{aboutData.description}</em>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <button className="mb-14 px-11 py-2 bg-primary text-white border-0 mt-3 font-light tracking-widest transition-colors duration-300 ease-in-out hover:bg-primaryDarker">
            <a href="/Portfolio.pdf" download={"resume"} target="_blank" className="uppercase text-lg">
              Resume
            </a>
          </button>
          <ul className="flex gap-10 justify-end">
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
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-2">
        {aboutData.images.map((item) => (
          <img key={item.name} src={item.imageAddress} alt={item.name} className="h-[380px] w-full object-cover" loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
