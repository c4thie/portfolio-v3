"use-client";
import React, { useRef, useLayoutEffect, ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Project, projects } from "@/constants"; // Import the Project type
import ProjectCard from "./ProjectCard";

const HorizontalScroll = () => {
  return (
    <div className="px-19">
      {projects.map((project, i) => (
        <div key={i} className="panel">
          <ProjectCard key={project.id} {...project} />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
