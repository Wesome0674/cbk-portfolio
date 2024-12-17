import { Links } from "@/ui/design-system/Links";
import { Typographie } from "@/ui/design-system/Typographie";
import Image from "next/image";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import Car from "./Car";

const NavBar = () => {
  return (
    <nav className="pt-[47px] fixed z-50">
      <div className="flex items-center w-full justify-between py-[25px] border-y border-y-primary">
        <div className="w-full lg:hidden block">
          <TbMenu3 size={35} color="#1c1b29"  />
        </div>

        <div className="lg:w-full flex items-center">
          <Image
            alt="logo"
            src="/img/svg/cbkLogo.svg"
            width={110}
            height={48}
            className="max-w-max"
          />
        </div>
        <ul className=" items-center gap-[60px] w-fit lg:flex hidden">
          <Links className="w-max" variant="normal">
            Home
          </Links>
          <Links className="w-max" variant="normal">
            About me
          </Links>
          <Links className="w-max" variant="normal">
            My skills
          </Links>
          <Links className="w-max" variant="normal">
            My work
          </Links>
          <Links className="w-max" variant="normal">
            contact
          </Links>
        </ul>
        <div className="flex items-center gap-[35px] w-full justify-end">
          <Links variant="externe" className="lg:block hidden">
            RESUME
            <HiOutlineExternalLink />
          </Links>
          <div className="flex items-center gap-2">
            <Image alt="logo" src="/img/svg/GB.svg" width={32} height={24} />
            <div className="flex items-center gap-[5px] cursor-pointer">
              <Typographie>EN</Typographie>
              <GoChevronDown />
            </div>
          </div>
        </div>
      </div>
      <Car />
    </nav>
  );
};

export default NavBar;
