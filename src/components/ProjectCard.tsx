import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
export default function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-[70rem] h-[26rem] bg-[#0a0a0a] bg-opacity-95 rounded-xl flex flex-row p-4 gap-4 shadow-xl hidden-object ${
        inView && "show-object"
      }`}
    >
      <Image
        className="h-full w-3/5 object-fit rounded-xl "
        src={"/scribbleseekerr.png"}
        alt="scribbleseekerr"
        height={1000}
        width={1000}
      />
      <div className="bg-transparent flex flex-col justify-between">
        <div className="bg-transparent">
          <h3 className="bg-transparent text-firstwhite font-bold text-3xl">
            {title}
          </h3>
          <p className="bg-transparent text-gray-200 font-normal text-xl">
            {description}
          </p>
          <div className="bg-transparent flex flex-row pt-4 gap-2">
            {tags.slice(0, 4).map((tag) => (
              <div
                key={tag}
                className="bg-[#1e1e1e] w-fit px-3 h-8 text-gray-200 font-normal text-xl flex justify-center items-center rounded-lg "
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="bg-transparent flex flex-row pt-2 gap-2">
            {tags.slice(4, 8).map((tag) => (
              <div
                key={tag}
                className="bg-[#1e1e1e] w-fit px-3 h-8 text-gray-200 font-normal text-xl flex justify-center items-center rounded-lg "
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row w-full h-fit gap-4 bg-transparent">
          <Link
            className="bg-firstwhite font-medium text-xl py-2  w-1/2 rounded-xl flex justify-center items-center hover:bg-gray-300 transition-colors"
            href="/"
          >
            View Site
          </Link>
          <Link
            className="bg-transparent border-firstwhite border-2 font-medium text-firstwhite text-xl py-2 w-1/2 rounded-xl flex justify-center items-center hover:bg-black transition-colors"
            href="/"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
