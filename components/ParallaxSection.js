"use client";
import { useEffect, useRef } from "react";

const Parallax = ({ children, speed = 0.5, height = "100vh" }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${offset * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={parallaxRef} className="relative w-full h-screen overflow-hidden" style={{ height }}>
      {children}
    </div>
  );
};

export default Parallax;
