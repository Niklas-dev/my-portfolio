import React from "react";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center w-full h-screen relative  z-30  bg-transparent pt-40 gap-16 px-2 pb-8"
    >
      <div
        ref={ref}
        className={` w-full lg:w-[65rem] h-[30rem]  bg-[#0a0a0a]  bg-opacity-95  flex flex-col  gap-4 shadow-xl hidden-object p-4 lg:p-6 rounded-xl ${
          inView && "show-object"
        }`}
      >
        <h4 className="bg-transparent text-firstwhite text-4xl font-bold">
          Write Me A Message
        </h4>
        <p className="bg-transparent text-gray-200 text-xl font-light w-3/4">
          Lets talk about your upcoming projects or ideas. I would love to work
          with you to achieve the best outcome.
        </p>
        <form className="bg-transparent flex flex-col gap-8 pt-4 h-full">
          <div className="flex flex-row bg-transparent gap-8">
            <input
              type="text"
              placeholder="Name"
              className="h-14 w-1/2 bg-[#1e1e1e] rounded-lg text-firstwhite px-4 text-lg font-medium py-2 outline-none focus:border-2 border-white"
            />
            <input
              type="text"
              placeholder="Email"
              className="h-14 w-1/2 bg-[#1e1e1e] rounded-lg text-firstwhite px-4 text-lg font-medium py-2 outline-none focus:border-2 border-white"
            />
          </div>
          <textarea
            placeholder="Text"
            className="h-full w-full bg-[#1e1e1e] rounded-lg text-firstwhite px-4 text-lg font-medium resize-none py-4 outline-none focus:border-2 border-white"
          />
          <button className="bg-firstwhite font-medium text-xl py-2 w-full rounded-xl flex justify-center items-center hover:bg-gray-300 transition-colors ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
