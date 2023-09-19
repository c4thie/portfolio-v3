import { Canvas } from "@react-three/fiber";
import { Cat } from "../components/Cat";
import RootLayout from "./layout";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="flexStart flex-col paddings">
      <section className="flexCenter gap-6 mx-5 lg:flex-row flex-col">
        <h2 className="font-catavalo md:text-[116px] text-[76px]">
          Curious Cat
        </h2>
        <div className="lg:w-[50%] md:[75%] w-[100%]">
          <Suspense>
            <Cat />
          </Suspense>
        </div>
      </section>
    </section>
  );
}
