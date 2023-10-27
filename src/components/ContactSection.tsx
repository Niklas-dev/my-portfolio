import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";
export default function ContactSection() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  const form = useRef<HTMLFormElement>(null);

  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!hasSent) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_USER_ID!
        )
        .then((result) => {
          setHasSent(true);

          form.current!.reset();
          setTimeout((timeout: any) => {
            setHasSent(false);
            clearTimeout(timeout);
          }, 4000);
          console.log(result.text);
        })
        .catch((error) => {
          setHasSent(false);
          console.log(error);
        });
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center w-full h-screen relative  z-30  bg-transparent pt-40 gap-16 px-2 pb-8"
    >
      <div
        ref={ref}
        className={` w-full lg:w-[65rem] h-fit  bg-[#0c0c0c]  bg-opacity-95  flex flex-col  gap-4 shadow-xl hidden-object p-4 lg:p-6 rounded-xl ${
          inView && "show-object"
        }`}
      >
        <h2 className="bg-transparent text-firstwhite text-4xl font-bold">
          Write Me A Message
        </h2>
        <p className="bg-transparent text-gray-200 text-xl font-light w-3/4">
          Lets talk about your upcoming projects or ideas. I would love to work
          with you to achieve the best outcome.
        </p>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="bg-transparent flex flex-col gap-8 pt-4 h-full"
        >
          <div className="flex flex-row bg-transparent gap-4">
            <input
              name="user_name"
              id="user_name"
              type="text"
              placeholder="Name"
              required
              className="h-14 w-1/2 bg-[#1e1e1e] rounded-lg text-firstwhite px-4 text-lg font-medium py-2 outline-none focus:border-2 border-white"
            />
            <input
              name="user_email"
              id="user_email"
              type="email"
              required
              placeholder="Email"
              className="h-14 w-1/2 bg-[#1e1e1e] rounded-lg text-firstwhite px-4 text-lg font-medium py-2 outline-none focus:border-2 border-white"
            />
          </div>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Your message"
            className="h-28 w-full bg-[#1e1e1e] rounded-lg text-firstwhite px-4 text-lg font-medium resize-none py-4 outline-none focus:border-2 border-white"
          />
          <button
            aria-label="Submit"
            className="bg-firstwhite font-medium text-xl py-2 w-full rounded-xl flex justify-center items-center hover:bg-gray-300 transition-colors "
          >
            {hasSent ? (
              <FaCheck className="bg-transparent h-8" />
            ) : (
              <FaArrowRight className="bg-transparent h-8" />
            )}
          </button>
        </form>
        <div className="flex flex-row gap-4 items-center bg-transparent">
          <Link
            className="bg-[#1e1e1e] rounded-full p-2 hover:bg-black cursor-pointer transition-colors"
            target="_blank"
            href={"https://github.com/Niklas-dev"}
          >
            <Image
              className="bg-transparent"
              src={"./github-mark-white.svg"}
              alt="github"
              width={30}
              height={30}
            />
          </Link>
          <a
            href="mailto:niklas.developers@gmail.com"
            className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite w-fit hover:bg-black cursor-pointer transition-colors"
          >
            niklas.developers@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
