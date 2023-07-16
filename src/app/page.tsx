"use client";
import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
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

    timeline.to(".navbar", {
      duration: 0.3,
      opacity: 1,
      y: 0,
      ease: "power2.easeInOut",
    });
    timeline.to(".nav-item", {
      duration: 0.3,
      opacity: 1,

      x: 0,
      ease: "power2.easeInOut",
      stagger: {
        amount: 1.2,
      },
    });

    return () => {};
  }, []);

  return (
    <main className="h-screen w-screen overflow-y-hidden">
      <ParticlesBackground />
      <HomeSection />

      <div className="h-screen bg-black"></div>
    </main>
  );
}
