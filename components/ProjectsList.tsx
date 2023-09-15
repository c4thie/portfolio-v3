"use-client";
import React, { useRef, useLayoutEffect, ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Project, projects } from "@/constants"; // Import the Project type
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      console.log(panels);
      console.log(slider.current);
      console.log(slider.current!.offsetWidth);
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current!,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current!.offsetWidth,
          markers: true,
        },
      });
    }, containerRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={containerRef}>
      {/* <div className="firstContainer"></div> */}
      <div ref={slider} className="container">
        {projects.map((project, i) => (
          <div key={i} className="panel flexCenter">
            <p>{project.title}</p>
            <p>{project.tech}</p>
            <ProjectCard key={project.id} {...project} />
          </div>
        ))}
      </div>
      {/* <div className="lastContainer">Last Container</div> */}
    </div>
  );
};

export default HorizontalScroll;
