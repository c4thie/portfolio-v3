"use-client";
import React, { useRef, useLayoutEffect, ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Project, projects } from "@/constants"; // Import the Project type
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";

const ProjectsList = () => {
  return (
    <div className="px-25">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="panel"
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 1 + i * 0.2,
          }}
        >
          <ProjectCard key={project.id} {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsList;
