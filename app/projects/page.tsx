"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import HorizontalScroll from "@/components/ProjectsListDefault";

const Projects = () => {
  return (
    <div className="flexStart flex-col paddings">
      <h2 className="font-catavalo text-[96px]">Projects</h2>
      <p className="font-mori text-[20px]">
        Here are a few of my recent projects
      </p>
      <HorizontalScroll />
    </div>
  );
};

export default Projects;
