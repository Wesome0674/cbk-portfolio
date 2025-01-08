import React from "react";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className="w-full min-h-screen space-y-[140px]">
      <div className="flex items-center justify-between w-full gap-2">
        <div className="space-y-[6px] max-w-[419px]">
          <Typographie>LYCEE LOUIS LACHENAL</Typographie>
          <div>
            <Typographie
              className="font-druk"
              variant="h1"
              theme="tercery"
              textEffect="large"
            >
              2021
            </Typographie>
            <Typographie variant="link" className="uppercase">
              That’s the year I was introduced to programming languages in a
              computer science class in high school, and as I kept coding, it
              quickly turned into a true passion.
            </Typographie>
          </div>
        </div>
        <div>
          <Image alt="" src="/img/png/languages.png" width={497} height={457} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center gap-[10px]">
          <Typographie variant="h6">2021</Typographie>
          <div className=" h-2 rounded-[2px] border-primary border-2 w-[200px]">
            <div className="w-full h-full bg-tercery"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Typographie variant="h6">2022</Typographie>
          <div className=" h-2 rounded-[2px] border-primary border-2 w-[200px]">
            <div className="w-full h-full bg-tercery"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Typographie variant="h6">2023</Typographie>
          <div className=" h-2 rounded-[2px] border-primary border-2 w-[200px]">
            <div className="w-full h-full bg-tercery"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Typographie variant="h6">2024</Typographie>
          <div className=" h-2 rounded-[2px] border-primary border-2 w-[200px]">
            <div className="w-full h-full bg-tercery"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Typographie variant="h6">Future</Typographie>
          <div className=" h-2 rounded-[2px] border-primary border-2 w-[200px]">
            <div className="w-full h-full bg-tercery"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
