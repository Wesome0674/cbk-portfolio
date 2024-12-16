import React from "react";
import { Typographie } from "../design-system/Typographie";
import PassionSlider from "./PassionSlider";
import Image from "next/image";
import { Links } from "../design-system/Links";

const AboutMe = () => {
  return (
    <div>
      <div className="flex">
        <div className="space-y-[29px] z-10">
          <Typographie
            className="uppercase font-calfine"
            variant="h2"
            theme="secondary"
            textEffect="large"
          >
            Let’s talk a bit <br /> about my <br></br>
            <Typographie
              className="uppercase font-calfine"
              variant="h2"
              theme="tercery"
            >
              Background
            </Typographie>
          </Typographie>
          <PassionSlider />
        </div>
        <div className="transform -translate-x-[150px] translate-y-[25px]">
          <Image
            alt=""
            src="/img/png/imgAboutMe.png"
            width={800}
            height={485}
          />
        </div>
      </div>
      <div className="w-[256px]">
       {/*  <Links className="w-full" variant="underline">Instagram</Links>
        <Links className="w-full" variant="underline">Github</Links>
        <Links className="w-full" variant="underline">Linkedin</Links> */}
      </div>
    </div>
  );
};

export default AboutMe;
