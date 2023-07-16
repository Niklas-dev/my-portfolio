import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center w-full h-fit relative  z-30  bg-transparent pt-40 gap-16 px-2">
      <div className="bg-transparent flex flex-col items-center">
        <h1 className="z-40 text-5xl text-firstwhite font-bold py-3">
          My Projects
        </h1>
        <p className="z-40 text-lg text-gray-300 font-normal ">
          See what I have created during my fullstack journey.
        </p>
      </div>
      <ProjectCard
        title="ScribbleSeekerr"
        image="/scribbleseekerr.png"
        description="A webapp to share text content. Featuring likes, full text search,
        report system and profile managment."
        tags={["django", "drf", "postgres", "oauth2", "nextjs", "tailwind"]}
        reserve={false}
      />
      <ProjectCard
        title="NameNation"
        image="/namenation.png"
        description="Check the national background of your name along with an age conntected to the given input."
        tags={["nextjs", "rest", "api", "tailwind", "hooks"]}
        reserve={true}
      />
      <ProjectCard
        title="PlainMindMap"
        image="/plainmindmap.png"
        description="Easily create mind maps about every topic. Enhance the power of gpt by just using the provided layout."
        tags={["nextjs", "react-flow", "tailwind", "gpt"]}
        reserve={false}
      />
      <ProjectCard
        title="My Portfolio"
        image="/portfolio.png"
        description="My personal portfolio, demonstrating my projects and skills."
        tags={[
          "nextjs",
          "tailwind",
          "design",
          "responsive",
          "ts-particles",
          "html5",
          "css",
        ]}
        reserve={true}
      />
    </div>
  );
}
