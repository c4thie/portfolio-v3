"use client";
import React from "react";
import Link from "next/link";

import AboutCat from "@/components/AboutCat";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flexStart flex-col paddings gap-3">
      <h2 className="md:text-[96px] text-[66px] font-catavalo">About</h2>
      <motion.p
        className="font-mori text-[20px] pl-40 pr-40 pt-10"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
      >
        Cat is a self taught full-stack web developer. She started her creative
        development journey by making{" "}
        <span className="text-yellow-500">
          <Link href="https://siyu.carrd.co">carrd.co</Link>
        </span>{" "}
        mini profiles and Wattpad book covers for her friends. Currently, she is
        studying Computer Science @ University of Waterloo, specializing in HCI. Her passion resides in tinkering with interactive projects and animations.{" "}
        <span className="text-yellow-500">✽</span>
        {/* <AboutCat /> */}
      </motion.p>
    </div>
  );
};

export default About;
