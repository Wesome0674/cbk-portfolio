"use client";

import React, { useEffect, useState } from "react";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";
import { ImportantText } from "../design-system/ImportantText";
import { useTranslations } from "next-intl";

interface Skills {
  id: number;
  year: number;
  description: string;
  location: string;
  img: string;
}

interface MySkillsClientProps {
  skills: Skills[];
}

const MySkillsClient: React.FC<MySkillsClientProps> = ({ skills }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    if (skills.length === 0) return;

    const skillChangeTimeout = setTimeout(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000);

    return () => clearTimeout(skillChangeTimeout);
  }, [currentSkillIndex, skills]);

  const currentSkill = skills[currentSkillIndex];

  const t = useTranslations(); // Récupère les traductions
  return (
    <div id="myskills" className="w-full min-h-screen gap-[75px] skills-container mx-auto flex items-center justify-center flex-col">
      <div className="flex flex-col items-center gap-[30px]">
        <ImportantText img="/img/svg/Wave-Marker.svg">
          <Typographie
            variant="h6"
            theme="secondary"
            className="uppercase"
            weight="medium"
          >
            {t("skills.tag")}
          </Typographie>
        </ImportantText>
        <Typographie
          textEffect="large"
          className="font-calfine uppercase text-center"
          variant="h3"
          theme="secondary"
        >
          {t("skills.titre1")}
          <Typographie variant="h3" theme="tercery">
            {" "}
            {t("skills.titre2")}
          </Typographie>
        </Typographie>
      </div>
      <div
        className="w-full space-y-[14vh] flex flex-col"
      >
        <div
          key={currentSkill.id}
          className="flex flex-col md:flex-row gap-12 items-center justify-between w-full "
        >
          <div className="space-y-[6px] max-w-[419px]">
            <Typographie className="uppercase">
              {currentSkill.location}
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
                {currentSkill.description}
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
