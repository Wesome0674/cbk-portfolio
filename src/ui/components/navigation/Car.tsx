import Image from "next/image";
import React from "react";

const Car = () => {
  return (
    <div className="w-full mt-[25px] flex items-end">
      <Image alt="" width={26} height={35} src="/img/svg/flag.svg" />
      <div className="w-full relative ">
        <Image
          alt=""
          width={1920}
          height={2}
          src="/img/svg/Line.svg"
          className="w-full h-2"
        />
        <Image
          alt=""
          width={103}
          height={33}
          src="/img/svg/car.svg"
          className="absolute top-[-30px]"
          style={{
            left: "2%"
          }}
        />
      </div>

      <Image alt="" width={52} height={45} src="/img/svg/trophy.svg" />
    </div>
  );
};

export default Car;
