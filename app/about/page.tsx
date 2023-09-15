import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flexStart flex-col paddings">
      <h2 className="font-catavalo text-[96px]">About</h2>
      <p className="font-mori text-[20px]">
        Cat is a self taught full-stack web developer. She started her creative
        development journey by making{" "}
        <span className="text-yellow-500">
          <Link href="https://siyu.carrd.co">carrd.co</Link>
        </span>{" "}
        mini profiles and Wattpad book covers for her friends. Currently, she is
        studying Computer Science @ University of Waterloo. Her passion resides
        in tinkering with interactive projects and animations{" "}
        <span className="text-yellow-500">✽</span>
      </p>
    </div>
  );
};

export default About;
