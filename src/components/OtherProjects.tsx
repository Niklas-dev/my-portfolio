import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OtherProjects() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Link
      ref={ref}
      target="_blank"
      className={`z-40 text-xl text-gray-200 font-bold pb-4 hover:underline  hidden-object  ${
        inView && "show-object"
      }`}
      href={"https://github.com/Niklas-dev"}
    >
      All other projects are on my github.
    </Link>
  );
}
