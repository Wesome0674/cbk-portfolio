import { Links } from "@/ui/design-system/Links";
import { Typographie } from "@/ui/design-system/Typographie";
import Image from "next/image";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";

const NavBar = () => {
  return (
    <nav className="pt-[47px]">
      <div className="flex items-center w-full justify-between py-[25px] border-y border-y-primary">
        <div className="w-full">
          <Image
            alt="logo"
            src="/img/svg/cbkLogo.svg"
            width={110}
            height={48}
          />
        </div>
        <ul className="flex items-center gap-[60px] w-fit">
          <Links className="w-max" variant="normal">Home</Links>
          <Links className="w-max" variant="normal">About me</Links>
          <Links className="w-max" variant="normal">My skills</Links>
          <Links className="w-max" variant="normal">My work</Links>
          <Links className="w-max" variant="normal">contact</Links>
        </ul>
        <div className="flex items-center gap-[35px] w-full justify-end">
          <Links variant="externe">
            RESUME
            <HiOutlineExternalLink />
          </Links>
          <div className="flex items-center gap-2">
            <Image alt="logo" src="/img/svg/GB.svg" width={32} height={24} />
            <div className="flex items-center gap-[5px]">
              <Typographie>EN</Typographie>
              <GoChevronDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
