import React from "react";
import { ImportantText } from "../design-system/ImportantText";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";

const PassionSlider = () => {
  return (
    <div className="mt-[100px] max-w-[408px] overflow-hidden border-t border-b border-primary gap-[13px] py-[20px] flex flex-col w-fit items-center">
      <ImportantText img="/img/svg/Marker.svg">
        <Typographie variant="h4" className="font-calfine text-center">
          MY PASSION
        </Typographie>
      </ImportantText>
      {/* Le wrapper qui cache le débordement */}
      <div className="overflow-hidden w-full">
        {/* Le slider avec animation */}
        <div className="flex items-center gap-[14px] w-max animate-slider">
          <div className="flex items-center gap-2">
            <Typographie variant="h6">TRAVEL</Typographie>
            <Image src="/img/svg/travel.svg" width={24} height={24} alt="" />
          </div>
          <div className="w-[50px] h-[4px] bg-primary"></div>
          <div className="flex items-center gap-2">
            <Typographie variant="h6">TRAVEL</Typographie>
            <Image src="/img/svg/travel.svg" width={24} height={24} alt="" />
          </div>
          <div className="w-[50px] h-[4px] bg-primary"></div>
          <div className="flex items-center gap-2">
            <Typographie variant="h6">TRAVEL</Typographie>
            <Image src="/img/svg/travel.svg" width={24} height={24} alt="" />
          </div>
          <div className="w-[50px] h-[4px] bg-primary"></div>
          <div className="flex items-center gap-2">
            <Typographie variant="h6">TRAVEL</Typographie>
            <Image src="/img/svg/travel.svg" width={24} height={24} alt="" />
          </div>
          <div className="w-[50px] h-[4px] bg-primary"></div>
          <div className="flex items-center gap-2">
            <Typographie variant="h6">TRAVEL</Typographie>
            <Image src="/img/svg/travel.svg" width={24} height={24} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassionSlider;
