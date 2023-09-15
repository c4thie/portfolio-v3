import { Canvas } from "@react-three/fiber";
import { Cat } from "../components/Cat";
import RootLayout from "./layout";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="flexStart flex-col paddings">
      <section className="flexCenter gap-6 mx-5">
        <h2 className="font-catavalo text-[116px]">Curious Cat</h2>
        <div className="w-[50%]">
          <Suspense>
            <Cat />
          </Suspense>
        </div>
      </section>
    </section>
  );
}
