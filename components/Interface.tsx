"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Cat from "./HomeCat";
import { Suspense } from "react";
import { Scroll, ScrollControls, Html } from "@react-three/drei";
import Experience from "./Experience";

import Hero from "./Hero";
import Skills from "./Skills";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";

import { motion } from "framer-motion";
import Contact from "./Contact";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <motion.section
      className={`h-auto w-screen first-letter:last:only:max-w-screen-2xl mx-auto flexStart flex-col paddings`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
    </>
  );
};

export default Interface;
