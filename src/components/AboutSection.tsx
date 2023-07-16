import React from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Link from "next/link";
export default function AboutSection() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      id="about"
      className="flex flex-col items-center w-full h-fit relative  z-30  bg-transparent pt-40 gap-16 px-2"
    >
      <div
        ref={ref}
        className={` w-full lg:w-[65rem] h-fit  bg-[#0a0a0a]  bg-opacity-95  flex flex-col lg:flex-row  gap-4 shadow-xl hidden-object p-4 lg:p-6 rounded-xl ${
          inView && "show-object"
        }`}
      >
        <FaStar
          className="z-40 bg-transparent hidden lg:block absolute -right-5 -top-5"
          color="#f3f4f6"
          size={50}
        />
        <div className="w-full lg:w-[60%] h-full bg-transparent flex flex-col justify-between">
          <div className="bg-transparent flex flex-col">
            <h4 className="bg-transparent text-firstwhite text-4xl font-bold">
              About
            </h4>
            <p className="bg-transparent text-gray-200 text-xl font-light pt-4">
              I&apos;m Niklas-dev, a versatile full-stack developer ready to
              bring your digital ideas to life. With expertise in both front-end
              and back-end development, I love to create amazing user
              experiences and powerful functionality.
            </p>

            <p className="bg-transparent text-gray-200 text-xl font-light pt-2">
              I love new technologies and staying up-to-date. I am a life long
              learner that is always looking forward to new opportunities that
              can improve my skillset.
            </p>

            <p className="bg-transparent text-gray-200 text-xl font-light pt-2">
              I think that teamwork, creativity and problem solving are
              essential for a good developer. I am on conistent journy working
              with these skills to provide robust and awesome applications, that
              are not just funtional, but nice to the eye aswell.
            </p>
          </div>
          <Link
            className="bg-firstwhite font-medium text-xl py-2 w-1/2 rounded-xl flex justify-center items-center hover:bg-gray-300 transition-colors mt-4"
            href=""
          >
            Contact Me
          </Link>
        </div>
        <div className="w-full lg:w-[40%] h-full bg-transparent  flex flex-col items-start lg:items-end gap-2 font-normal">
          <Skills />
          <SoftSkills />
        </div>
      </div>
    </div>
  );
}
