"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="py-12 px-96 flex flex-row justify-between items-center overflow-hidden z-40 bg-transparent">
      <div className="bg-transparent">
        <div className="h-16 w-16 rotate-45 bg-firstwhite rounded-xl flex items-center justify-center p-2 hover:rotate-0 transition-transform z-40 ">
          <Image
            className="-rotate-45 hover:rotate-0 transition-transform w-full h-full bg-transparent"
            src={"/new-logo.png"}
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div
        className={`w-full h-full  flex flex-col justify-center bg-transparent`}
      >
        <div className="h-1 bg-gradient-to-r  from-firstwhite via-transparent   to-firstwhite bg-transparent"></div>
      </div>
      <div className="flex flex-row gap-4 z-40 bg-transparent">
        <h1 className="cursor-pointer text-xl  text-black   bg-firstwhite  rounded-full h-12 w-32 flex justify-center items-center font-bold hover:bg-gray-400 transition-colors ">
          Projects
        </h1>
        <h1 className="cursor-pointer text-xl text-firstwhite  rounded-full h-12 w-32 flex justify-center items-center font-bold hover:bg-black transition-colors bg-transparent">
          Projects
        </h1>
        <h1 className="cursor-pointer text-xl text-firstwhite  rounded-full h-12 w-32 flex justify-center items-center font-bold hover:bg-black transition-colors bg-transparent">
          Projects
        </h1>
      </div>
    </div>
  );
}
