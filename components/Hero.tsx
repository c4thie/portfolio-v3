import React from "react";
import Cat from "./HomeCat";
import { Suspense } from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen flexStart gap-6 mx-5 lg:flex-row flex-col w-screen paddings">
        <h2 className="font-catavalo md:text-[116px] text-[76px]">
          Curious Cat
        </h2>
        {/* <div className="lg:w-[50%] md:[75%] w-[100%]">
          <Suspense>
            <Cat />
          </Suspense>
        </div> */}
      </div>
      <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-10">
        <div className="flex justify-center items-start p-2 mt-15">
          <div className="pt-5 arrow-down cursor-pointer"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
