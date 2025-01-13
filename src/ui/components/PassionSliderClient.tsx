"use client";

import Image from "next/image";
import { Typographie } from "../design-system/Typographie";
import { useTranslations } from "next-intl";
import { ImportantText } from "../design-system/ImportantText";

type Passion = {
  id: number;
  name: string;
  icon: string;
  translations: { translatedName: string }[];
};

export default function PassionSliderClient({
  passions,
}: {
  passions: Passion[];
}) {
  const t = useTranslations();
  
  return (
    <div className="max-w-[408px] overflow-hidden border-t border-b border-primary gap-[13px] py-[20px] flex flex-col w-fit items-center">
      <ImportantText img="/img/svg/Marker.svg">
        <Typographie
          variant="h4"
          className="font-calfine text-center uppercase"
        >
          {t("aboutMe.passions")}
        </Typographie>
      </ImportantText>
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-[14px] w-max animate-slider">
          {[...passions, ...passions].map((passion, index) => (
            <div key={index} className="flex items-center gap-2">
              <Typographie className="uppercase" variant="h6">
                {passion.translations && passion.translations.length > 0
                  ? passion.translations[0].translatedName
                  : passion.name}
              </Typographie>
              <Image alt="" src={passion.icon} width={24} height={24} />
              <div className="w-[50px] h-[4px] bg-primary"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
