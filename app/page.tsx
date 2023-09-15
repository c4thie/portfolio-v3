import { Canvas } from "@react-three/fiber";
import { Cat } from "../components/Cat";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main>
      <RootLayout>
        <Cat />
      </RootLayout>
    </main>
  );
}
