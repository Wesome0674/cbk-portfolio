"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Car = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full mt-[25px] flex items-end">
      <Image alt="" width={26} height={35} src="/img/svg/flag.svg" />
      <div className="w-full relative ">
        <Image
          alt=""
          width={1920}
          height={2}
          src="/img/svg/Line.svg"
          className="w-full h-2"
        />
        <Image
          alt=""
          width={103}
          height={33}
          src="/img/svg/car.svg"
          className="absolute top-[-30px]"
          style={{
            left: `${Math.min(scrollPercentage, 95)}%`,
          }}
        />
      </div>

      <Image alt="" width={52} height={45} src="/img/svg/trophy.svg" />
    </div>
  );
};

export default Car;
