import React from "react";
import { Typographie } from "../design-system/Typographie";
import PassionSlider from "./PassionSlider";
import Image from "next/image";
import { Links } from "../design-system/Links";
import { ImportantText } from "../design-system/ImportantText";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations();

  return (
    <div
      id="aboutme"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="space-y-[50px] lg:translate-x-[75px] xl:max-w-fit w-full mx-auto ">
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="space-y-[29px] z-10">
            <Typographie
              className="uppercase font-calfine"
              variant="h2"
              theme="secondary"
              textEffect="large"
            >
              {t("aboutMe.titre1")} <br /> {t("aboutMe.titre")} <br></br>
              <Typographie
                className="uppercase font-calfine"
                variant="h2"
                theme="tercery"
              >
                {t("aboutMe.titre2")}
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
        <div className="flex lg:items-end justify-between flex-col-reverse lg:flex-row gap-x-[180px] gap-y-16">
          <div className="lg:w-[256px] w-full flex flex-col gap-[15px]">
            <div>
              <ImportantText img="/img/svg/Wave-Marker.svg">
                <Typographie
                  variant="link"
                  className="uppercase"
                  weight="medium"
                >
                  {t("aboutMe.followMe")}
                </Typographie>
              </ImportantText>
              <div className="w-full h-[1px] bg-primary mt-[15px]"></div>
            </div>
            <Links link="#" className="w-full" variant="underline">
              {t("aboutMe.socialLinks.instagram")}
            </Links>
            <Links link="#" className="w-full" variant="underline">
              {t("aboutMe.socialLinks.github")}
            </Links>
            <Links link="#" className="w-full" variant="underline">
              {t("aboutMe.socialLinks.linkedin")}
            </Links>
          </div>

          <Typographie  className="uppercase lg:-translate-x-[150px] leading-[30px] max-w-[800px] relative inline-block arrow">
            {t("aboutMe.introText")}

            <Typographie component="span">
              {t("aboutMe.goal")}
            </Typographie>
          </Typographie>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
