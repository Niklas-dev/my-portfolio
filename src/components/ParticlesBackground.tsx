"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig from "@/styles/particles-config";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    //console.log(container);
  }, []);
  return (
    <Particles
      className="-z-10 w-full h-full particles-canvas grayscale absolute"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={particlesConfig as any}
    />
  );
}
