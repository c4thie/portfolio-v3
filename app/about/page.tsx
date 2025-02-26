"use client";
import React from "react";
import Link from "next/link";

import AboutCat from "@/components/AboutCat";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-10 flexStart flex-col px-28 lg:px-52 gap-0 justify-center items-center text-center">
      <h2 className="md:text-[96px] text-[66px] font-catavalo">About</h2>
      <motion.p
        className="flex flex-col justify-center items-center font-mori text-[20px] pl-35 pr-35 pt-10"
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
        <div>
          Cat is a full-stack developer and self taught designer. She started her creative
          development journey by making{" "}<span className="text-yellow-500"><Link href="https://siyu.carrd.co">carrd.co</Link></span>{" "}
          mini profiles and Wattpad book covers for her friends. Currently, she is
          studying Computer Science @ University of Waterloo, specializing in HCI. Her passion resides in tinkering with interactive projects and animations.{" "}
          <span className="text-yellow-500">✽</span>
        </div>
        {/* <AboutCat /> */}
        <Image className="self-center" src="/sign.jpg" alt="signature" width={600} height={600}/>
      </motion.p>
    </div>
  );
};

export default About;
