"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import ProjectsList from "@/components/ProjectsListDefault";

const Projects = () => {
  return (
    <div className="flexStart flex-col paddings">
      <h2 className="md:text-[96px] text-[66px] font-catavalo">Projects</h2>
      <p className="font-mori text-[20px]">
        Here are a few recent projects
      </p>
      <ProjectsList />
    </div>
  );
};

export default Projects;
