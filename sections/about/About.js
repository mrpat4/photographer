"use client";
import { useState } from "react";
import { aboutData, homeData } from "../seeds";

const AboutSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-3">
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col w-1/2">
          <h1>{aboutData.title}</h1>
          <em className="whitespace-pre-wrap italic tracking-widest leading-7 font-light">{aboutData.description}</em>
        </div>
        <div className="w-1/2">
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
          <img key={item.name} src={item.imageAddress} alt={item.name} className="h-[380px] w-full object-cover" />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
