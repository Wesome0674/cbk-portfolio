"use client";
import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 grid place-content-center z-[200] bg-primary">
      <div className="flex flex-col items-center gap-[70px]">
        <div className="relative loader aspect-video">
          <Image src="/img/svg/logoLoader.svg" alt="" fill className="fixed" />
        </div>
        <div
          className="animate-spin inline-block w-12 h-12 border-[3px] border-current border-t-transparent text-tercery rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
