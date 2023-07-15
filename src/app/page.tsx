"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      delay: 0.3,
    });

    timeline.to(".word", {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      ease: "power2.easeOut",
      stagger: {
        amount: 1.2,
      },
    });

    return () => {};
  }, []);

  return (
    <main className="h-screen w-screen ">
      <ParticlesBackground />
      <div className="text-white h-full w-full flex flex-col items-center justify-center gradient">
        <div>
          <h1 className="text-8xl font-bold word opacity-0 scale-0">
            Niklas-dev
          </h1>
          <h1 className="text-8xl font-bold word opacity-0 scale-0">
            Niklas-dev
          </h1>
          <h1 className="text-8xl font-bold word opacity-0 scale-0">
            Niklas-dev
          </h1>
        </div>
      </div>
    </main>
  );
}
