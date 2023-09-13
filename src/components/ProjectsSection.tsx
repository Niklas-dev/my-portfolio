import React from "react";
import ProjectCard from "./ProjectCard";
import OtherProjects from "./OtherProjects";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full h-fit relative  z-30  bg-transparent pt-40 gap-16 px-2 "
    >
      <div className="bg-transparent flex flex-col items-center">
        <h1 className="z-40 text-5xl text-firstwhite font-bold py-3 text-center bg-transparent">
          My Projects
        </h1>
        <p className="z-40 text-lg text-gray-300 font-normal text-center bg-transparent">
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
        site="https://scribble.lat/"
        sourceCode="https://github.com/Niklas-dev/scribbleseekerr"
        date="15.06.2023"
      />
      <ProjectCard
        title="NameNation"
        image="/namenation.png"
        description="Check the national background of your name along with an age conntected to the given input."
        tags={["nextjs", "rest", "api", "tailwind", "hooks"]}
        reserve={true}
        site="https://namenation.vercel.app/"
        sourceCode="https://github.com/Niklas-dev/namenation"
        date="14.03.2023"
      />
      <ProjectCard
        title="PlainMindMap"
        image="/plainmindmap.png"
        description="Easily create mind maps about every topic. Enhance the power of gpt by just using the provided layout."
        tags={["nextjs", "react-flow", "tailwind", "gpt"]}
        reserve={false}
        site="https://plain-mindmap-app.vercel.app/"
        sourceCode="https://github.com/Niklas-dev/plain-mindmap-app"
        date="17.06.2023"
      />
      <ProjectCard
        title="My Portfolio"
        image="/portfolio.png"
        description="My personal portfolio, demonstrating my projects and skills."
        tags={["nextjs", "tailwind", "design", "css", "ts-particles", "html5"]}
        site="https://niklas-dev.vercel.app/"
        sourceCode="https://github.com/Niklas-dev/new-portfolio"
        date="22.06.2023"
        reserve={true}
      />
      <ProjectCard
        title="Porsche Configurator"
        image="/porsche-config.png"
        description="A UI only design implementation from dribbble. Implementation made for fhd screens."
        tags={["nextjs", "tailwind", "design", "ui", "dribbble", "html5"]}
        site="https://porsche-config.vercel.app/"
        sourceCode="https://github.com/Niklas-dev/porsche-config"
        date="02.09.2023"
        reserve={false}
      />

      <OtherProjects />
    </div>
  );
}
