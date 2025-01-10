"use client";

import { Links } from "@/ui/design-system/Links";
import { Typographie } from "@/ui/design-system/Typographie";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import Car from "./Car";
import Link from "next/link";
import { useNavContext } from "../../../../context/NavContext";


const NavBar = () => {
  const {navVisibility, setNavVisibility} = useNavContext();

  return (
    <nav className="pt-[47px] fixed z-50 container mx-auto top-0  w-full">
      <div className="flex items-center w-full justify-between py-[25px] border-y border-y-primary">
        <div className="w-full lg:hidden block" onClick={() => setNavVisibility(!navVisibility)}>
          <TbMenu3 size={35} color="#1c1b29" />
        </div>

        <Link href="/" className="lg:w-full flex items-center">
          <Image
            alt="logo"
            src="/img/svg/cbkLogo.svg"
            width={110}
            height={48}
            className="max-w-max"
          />
        </Link>
        <ul className=" items-center gap-[60px] w-fit lg:flex hidden">
          <Links link="#header" className="w-max" variant="normal">
            Home
          </Links>
          <Links link="#aboutme" className="w-max" variant="normal">
            About me
          </Links>
          <Links link="#myskills" className="w-max" variant="normal">
            My skills
          </Links>
          <Links link="#mywork" className="w-max" variant="normal">
            My work
          </Links>
          <Links link="#form" className="w-max" variant="normal">
            contact
          </Links>
        </ul>
        <div className="flex items-center gap-[35px] w-full justify-end">
          <div className=" items-center gap-2 lg:flex hidden">
            <Links link="#" variant="externe">
              RESUME
            </Links>
            <HiOutlineExternalLink size={18} />
          </div>
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
