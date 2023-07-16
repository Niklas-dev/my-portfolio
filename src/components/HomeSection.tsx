"use client";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import LottiePlayer from "./LottiePlayer";

export default function HomeSection() {
  const headline = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({
    x: 150,
    y: 400,
  });
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;
      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = headline.current!.offsetWidth - window.innerWidth,
        maxY = headline.current!.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1 * 0.1,
        panY = maxY * yDecimal * -1 * 0.05;

      headline.current!.animate(
        { transform: `translate(${panX}px, ${panY}px)` },
        { duration: 2000, fill: "forwards", easing: "ease" }
      );
    });

    return () => {};
  }, []);
  return (
    <div className="flex flex-col w-full h-screen relative  z-30 bg-transparent">
      <NavBar />
      <div
        className="absolute z-30"
        style={{ top: mousePos.y, left: mousePos.x }}
      >
        <div className="rounded-full w-[150px] h-[150px] xxl:w-[250px] xxl:h-[250px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute blur-[150px] bg-firstwhite animate-pulse "></div>
      </div>
      <div className=" h-full w-full flex flex-col items-center mt-40 lg:mt-72 xxl:mt-96 gradient z-20 bg-transparent">
        <div
          ref={headline}
          className="flex flex-col items-center bg-transparent"
        >
          <div className="flex flex-row justify-center gap-2 text-firstwhite text-lg lg:text-3xl xxl:text-4xl font-medium bg-transparent">
            <p className=" word opacity-0 scale-0 text-center">Hello,</p>
            <p className="word opacity-0 scale-0 text-center"> It&apos;s me</p>
          </div>
          <h1 className="text-5xl lg:text-7xl xxl:text-8xl font-bold word opacity-0 scale-0  text-center text-firstwhite bg-transparent">
            Niklas-dev
          </h1>
          <p className="text-lg lg:text-xl xxl:text-2xl font-normal word opacity-0 scale-0  text-center text-gray-400 w-3/4 md:w-1/2 pt-2 md:pt-4 bg-transparent">
            I am a fullstack focused webdeveloper. I design, plan out and
            develop web apps from the ground up to solve your problem.
          </p>
        </div>
        <div className="mt-16 lg:mt-20 xxl:mt-52 bg-transparent">
          <LottiePlayer
            loop
            autoplay
            src="https://lottie.host/58a43a8e-cb4c-4b9e-8fef-70f82798e46b/C6YBMt9rjR.json"
            classes="h-40 w-40 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
//https://lottie.host/7a54126d-8332-43b5-97c1-2d52bad61576/yr2q0xBYu2.json
