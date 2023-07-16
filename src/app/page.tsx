"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";

import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectsSection from "@/components/ProjectsSection";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

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
      ease: "power2.easeOut",
    });
    timeline.to(".nav-item", {
      duration: 0.3,
      opacity: 1,

      x: 0,
      ease: "power2.easeOut",
      stagger: {
        amount: 1.2,
      },
    });

    return () => {};
  }, []);

  return (
    <main className="h-screen w-screen overflow-x-hidden ">
      <ParticlesBackground />
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
