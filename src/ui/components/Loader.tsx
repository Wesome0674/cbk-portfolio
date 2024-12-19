"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typographie } from "@/ui/design-system/Typographie";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 25); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen grid place-content-center">
      <div className="flex flex-col items-center gap-[70px]">
        <div className="flex flex-col items-center gap-[35px]">
          <Image
            src="/img/png/loaderLogo.png"
            alt=""
            width={392}
            height={171}
          />
          <div className="flex items-center gap-[5px]">
            <Image
              src="/img/png/collage letters 1.png"
              alt=""
              width={43}
              height={48}
              priority
            />
            <Image
              src="/img/png/collage letters 2.png"
              alt=""
              width={43}
              height={48}
            />
            <Image
              src="/img/png/collage letters 3.png"
              alt=""
              width={43}
              height={48}
            />
            <Image
              src="/img/png/collage letters 6.png"
              alt=""
              width={43}
              height={48}
            />
            <Image
              src="/img/png/collage letters 5.png"
              alt=""
              width={43}
              height={48}
            />
            <Image
              src="/img/png/collage letters 4.png"
              alt=""
              width={43}
              height={48}
            />
            <Image
              src="/img/png/collage letters 7.png"
              alt=""
              width={43}
              height={48}
            />
          </div>
        </div>
        <div className="w-[141px] flex flex-col items-center">
          <Typographie
            variant="display"
            className="font-druk"
            theme="secondary"
            textEffect="large"
          >
            {progress}
          </Typographie>
          <div className="w-full h-[6px] text-small-effect border border-primary rounded-[1px]">
            <div
              className="h-full bg-secondary"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
