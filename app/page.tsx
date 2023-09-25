import { Canvas } from "@react-three/fiber";
import Cat from "../components/HomeCat";
import RootLayout from "./layout";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="flexStart flex-col paddings">
      <div className="flexCenter gap-6 mx-5 lg:flex-row flex-col">
        <h2 className="font-catavalo md:text-[116px] text-[76px]">
          Curious Cat
        </h2>
        <div className="lg:w-[50%] md:[75%] w-[100%]">
          {/* <Suspense> */}
          <Cat />
          {/* </Suspense> */}
        </div>
      </div>
      <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center pt-10">
        <div className="flex justify-center items-start p-2 mt-15">
          <div className="pt-5 arrow-down cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
}
