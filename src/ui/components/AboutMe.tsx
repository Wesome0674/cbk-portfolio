import React from "react";
import { Typographie } from "../design-system/Typographie";
import PassionSlider from "./PassionSlider";
import Image from "next/image";
import { Links } from "../design-system/Links";
import { ImportantText } from "../design-system/ImportantText";

const AboutMe = () => {
  return (
    <div id="aboutme" className="w-full min-h-screen flex items-center justify-center">
      <div className="space-y-[50px] lg:translate-x-[75px] max-w-fit mx-auto ">
        <div className="flex flex-col lg:flex-row gap-7">
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
          <div className="transform lg:-translate-x-[150px] lg:translate-y-[25px]">
            <Image
              alt=""
              src="/img/png/imgAboutMe.png"
              width={800}
              height={485}
            />
          </div>
        </div>
        <div className="flex lg:items-end justify-between flex-col-reverse lg:flex-row gap-x-[180px] gap-8">
          <div className="w-[256px] flex flex-col gap-[15px]">
            <div>
              <ImportantText img="/img/svg/Wave-Marker.svg">
                <Typographie
                  variant="link"
                  className="uppercase"
                  weight="medium"
                >
                  Follow me
                </Typographie>
              </ImportantText>
              <div className="w-full h-[1px] bg-primary mt-[15px]"></div>
            </div>
            <Links link="#" className="w-full" variant="underline">
              Instagram
            </Links>
            <Links link="#" className="w-full" variant="underline">
              Github
            </Links>
            <Links link="#" className="w-full" variant="underline">
              Linkedin
            </Links>
          </div>

          <Typographie className="uppercase lg:-translate-x-[150px] leading-[30px] max-w-[800px] relative inline-block arrow">
            For the past&nbsp;
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                two years
              </Typographie>
            </ImportantText>
            , I have immersed myself in the world of{" "}
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                coding and interface
              </Typographie>
            </ImportantText>
            design, a passion that began as soon as I discovered the endless
            possibilities of the digital world. I am currently a student at{" "}
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                L&apos;Ecole By CCI Haute-Savoie,
              </Typographie>
            </ImportantText>
            studying in the digital field, where I continue to develop my skills
            in a dynamic and innovative environment. Before that, I earned{" "}
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                a high school diploma in STIDD,
              </Typographie>
            </ImportantText>{" "}
            (Sciences and Technologies of Engineering and Sustainable
            Development), a program that provided me with a solid foundation in
            engineering and sustainable development—fields that still influence
            my projects today. <br />
            My goal is to combine my technical and creative knowledge to become
            an
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                entrepreneur in the tech industry
              </Typographie>
            </ImportantText>
            , where I can create solutions that push the boundaries of{" "}
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                innovation
              </Typographie>
            </ImportantText>{" "}
            and{" "}
            <ImportantText img="/img/svg/Line-Marker.svg">
              <Typographie weight="bold" component="span">
                efficiency
              </Typographie>
            </ImportantText>
            .
          </Typographie>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
