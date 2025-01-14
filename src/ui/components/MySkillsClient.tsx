"use client";

import React, { useEffect, useState } from "react";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";
import { ImportantText } from "../design-system/ImportantText";

interface Skills {
  id: number;
  year: number;
  img: string;
  description: string;
  location: string;
  translations: {
    translatedDescription: string;
    translatedLocation: string;
  }[];
}

interface MySkillsClientProps {
  skills: Skills[];
  locale: string;
}

const MySkillsClient: React.FC<MySkillsClientProps> = ({ skills, locale }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    if (skills.length === 0) return;

    const skillChangeTimeout = setTimeout(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000);

    return () => clearTimeout(skillChangeTimeout);
  }, [currentSkillIndex, skills]);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const currentSkill = skills[currentSkillIndex];

  return (
    <div
      id="myskills"
      className="w-full min-h-screen gap-[75px] skills-container mx-auto flex items-center justify-center flex-col"
    >
      <div className="flex flex-col items-center gap-[30px]">
        <ImportantText img="/img/svg/Wave-Marker.svg">
          <Typographie
            variant="h6"
            theme="secondary"
            className="uppercase"
            weight="medium"
          >
            Mes compétences
          </Typographie>
        </ImportantText>
        <Typographie
          textEffect="large"
          className="font-calfine uppercase text-center"
          variant="h3"
          theme="secondary"
        >
          Mon parcours
          <Typographie variant="h3" theme="tercery">
            {" "}
            professionnel
          </Typographie>
        </Typographie>
      </div>
      <div className="w-full space-y-[14vh] flex flex-col">
        <div
          key={currentSkill.id}
          className="flex flex-col md:flex-row gap-12 items-center justify-between w-full"
        >
          <div className="space-y-[6px] max-w-[419px]">
            <Typographie className="uppercase">
              {currentSkill.translations.find((t) => t.language === currentLocale)
                ?.translatedLocation || currentSkill.location}
            </Typographie>
            <div>
              <Typographie
                className="font-druk"
                variant="date"
                theme="tercery"
                textEffect="large"
              >
                {currentSkill.year}
              </Typographie>
              <Typographie variant="link" className="capitalize">
                {currentSkill.translations.find((t) => t.language === currentLocale)
                  ?.translatedDescription || currentSkill.description}
              </Typographie>
            </div>
          </div>
          <div>
            <Image
              alt=""
              src={currentSkill.img}
              className="max-w-[60vw]"
              width={497}
              height={457}
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-[4.688vw]">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`flex flex-col items-center gap-[10px] w-full ${
                index === currentSkillIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <Typographie variant="h6">{skill.year}</Typographie>
              <div className="h-[10px] rounded-full border-primary border-2 w-full overflow-hidden">
                <div
                  className={`h-full ${
                    index === currentSkillIndex ? "bg-tercery" : "bg-gray-300"
                  }`}
                  style={{
                    width: index === currentSkillIndex ? "100%" : "0%",
                    transition:
                      index === currentSkillIndex ? "width 5s linear" : "none",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkillsClient;
