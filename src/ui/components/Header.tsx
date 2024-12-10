import React from "react";
import { Typographie } from "../design-system/Typographie";
import { Button } from "../design-system/Button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mt-[87px]">
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-[10px]">
          <Typographie
            className="text-center font-calfine uppercase"
            variant="h1"
            theme="secondary"
            textEffect="large"
          >
            I’m a creative web <br />{" "}
            <Typographie
              variant="h1"
              theme="tercery"
              textEffect="large"
              className="font-calfine uppercase"
            >
              developper
            </Typographie>
          </Typographie>
          <div className="flex items-center gap-2">
            <Image
              alt="logo"
              src="/img/svg/long.svg"
              width={14}
              height={19.09}
            />
            <Typographie variant="h6">BASED IN FRANCE</Typographie>
            <Image
              alt="logo"
              src="/img/svg/long.svg"
              width={14}
              height={19.09}
            />
          </div>
        </div>

        <Typographie className="uppercase text-center max-w-[776px]">
          Hi i’m Boularand Killian, a 18 year old young man passionate about Web
          technologies and Entrepreneurship. Ready to take this journey with me
          to discover my personal world and what i do ?
        </Typographie>
        <div className="flex items-center gap-[20px]">
          <Button>MY WORK</Button>
          <Button variant="outline">MY SKILLS</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
