import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ProjectCard({
  title,
  image,
  description,
  tags,
  reserve,
  site,
  sourceCode,
  date,
}: {
  title: string;
  image: string;
  description: string;
  tags: string[];
  reserve: boolean;
  site: string;
  sourceCode: string;
  date: string;
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });

  const router = useRouter();
  return (
    <div
      ref={ref}
      className={` md:w-[48rem] lg:w-[63rem] h-fit lg:h-[26rem] bg-[#0a0a0a] bg-opacity-95 rounded-xl flex ${
        reserve ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      } p-4 gap-4 shadow-xl hidden-object ${inView && "show-object"}`}
    >
      <Image
        onClick={() => window.open(site, "_blank")!.focus()}
        className="h-full w-full md:w-[45%] object-cover rounded-xl text-firstwhite hover:grayscale transition-colors cursor-pointer"
        src={image}
        alt="scribbleseekerr"
        height={1000}
        placeholder="blur"
        width={1000}
      />
      <div className="bg-transparent flex flex-col justify-between">
        <div className="bg-transparent">
          <div className="flex flex-row items-baseline bg-transparent gap-4">
            <h3 className="bg-transparent text-firstwhite font-bold text-3xl">
              {title}
            </h3>
            <p className="bg-transparent text-gray-200 font-normal text-base">
              {date}
            </p>
          </div>
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

        <div className="flex flex-row w-full h-fit gap-4 bg-transparent pt-4">
          <Link
            className="bg-firstwhite font-medium text-xl py-2  w-1/2 rounded-xl flex justify-center items-center hover:bg-gray-300 transition-colors"
            target="_blank"
            href={site}
          >
            View Site
          </Link>
          <Link
            className="bg-transparent border-firstwhite border-2 font-medium text-firstwhite text-xl py-2 w-1/2 rounded-xl flex justify-center items-center hover:bg-black transition-colors"
            target="_blank"
            href={sourceCode}
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
