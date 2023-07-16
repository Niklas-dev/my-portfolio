import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center w-full h-fit relative  z-30  bg-transparent pt-40 gap-16">
      <ProjectCard
        title="ScribbleSeekerr"
        description="A webapp to share text content. Featuring likes, full text search,
        report system and profile managment."
        tags={["django", "drf", "postgres", "oatuh2", "nextjs", "tailwind"]}
      />
      <ProjectCard
        title="ScribbleSeekerr"
        description="A webapp to share text content. Featuring likes, full text search,
        report system and profile managment."
        tags={["django", "drf", "postgres", "oatuh2", "nextjs", "tailwind"]}
      />
      <ProjectCard
        title="ScribbleSeekerr"
        description="A webapp to share text content. Featuring likes, full text search,
        report system and profile managment."
        tags={["django", "drf", "postgres", "oatuh2", "nextjs", "tailwind"]}
      />
      <ProjectCard
        title="ScribbleSeekerr"
        description="A webapp to share text content. Featuring likes, full text search,
        report system and profile managment."
        tags={["django", "drf", "postgres", "oatuh2", "nextjs", "tailwind"]}
      />
    </div>
  );
}
