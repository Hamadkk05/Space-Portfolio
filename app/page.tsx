import Image from "next/image";
import Hero from "@/components/main/hero"
import Skills from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero/>
        <Skills/>

      </div>
    </main>
  );
}
