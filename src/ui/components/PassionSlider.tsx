import React from "react"; 
import { ImportantText } from "../design-system/ImportantText";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";

const PassionSlider = () => {
  // Tableau dynamique des passions
  const passions = [
    { label: "TRAVEL", icon: "/img/svg/travel.svg" },
    { label: "CODING", icon: "/img/svg/coding.svg" },
    { label: "SPORTS", icon: "/img/svg/sports.svg" },
    { label: "AVIATION", icon: "/img/svg/aviation.svg" },
    { label: "DESIGN", icon: "/img/svg/design.svg" },
  ];

  return (
    <div className="mt-[100px] max-w-[408px] overflow-hidden border-t border-b border-primary gap-[13px] py-[20px] flex flex-col w-fit items-center">
      <ImportantText img="/img/svg/Marker.svg">
        <Typographie variant="h4" className="font-calfine text-center">
          MY PASSION
        </Typographie>
      </ImportantText>
      {/* Wrapper qui cache le débordement */}
      <div className="overflow-hidden w-full">
        {/* Slider avec animation */}
        <div className="flex items-center gap-[14px] w-max animate-slider">
          {/* Contenu original + duplication pour continuité */}
          {[...passions, ...passions].map((passion, index) => (
            <div key={index} className="flex items-center gap-2">
              <Typographie variant="h6">{passion.label}</Typographie>
              <Image src={passion.icon} width={24} height={24} alt={passion.label} />
              <div className="w-[50px] h-[4px] bg-primary"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassionSlider;
