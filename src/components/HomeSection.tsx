import React from "react";
import NavBar from "./NavBar";
import LottiePlayer from "./LottiePlayer";

export default function HomeSection() {
  return (
    <div className="flex flex-col w-full h-full ">
      <NavBar />
      <div className=" h-full w-full flex flex-col items-center mt-72 gradient">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center gap-2 text-firstwhite text-3xl font-medium">
            <p className=" word opacity-0 scale-0 text-center">Hello,</p>
            <p className="word opacity-0 scale-0 text-center"> It&apos;s me</p>
          </div>
          <h1 className="text-7xl font-bold word opacity-0 scale-0  text-center text-firstwhite">
            Niklas-dev
          </h1>
          <p className="text-xl font-normal word opacity-0 scale-0  text-center text-gray-400 w-1/2 pt-4">
            I am a fullstack focused webdeveloper. I design, plan out and
            develop web apps from the ground up to solve your problem.
          </p>
        </div>
        <div className="mt-20">
          <LottiePlayer
            loop
            autoplay
            src="https://lottie.host/58a43a8e-cb4c-4b9e-8fef-70f82798e46b/C6YBMt9rjR.json"
            classes="h-40 w-40"
          />
        </div>
      </div>
    </div>
  );
}
//https://lottie.host/7a54126d-8332-43b5-97c1-2d52bad61576/yr2q0xBYu2.json
