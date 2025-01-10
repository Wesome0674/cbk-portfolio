"use client";

import { Links } from "@/ui/design-system/Links";
import { Typographie } from "@/ui/design-system/Typographie";
import Image from "next/image";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavContext } from "../../../../context/NavContext";
import Link from "next/link";

const SideBar = () => {
  const { navVisibility, setNavVisibility } = useNavContext();

  if (!navVisibility) return null; // Retourne rien si navVisibility est false

  const handleCloseSidebar = () => setNavVisibility(false); // Fonction pour fermer la sidebar

  return (
    <div className="w-full h-full fixed top-0 right-0 z-[100] block lg:hidden">
      <Image
        src="/img/png/bg.png"
        width={1920}
        height={1080}
        alt=""
        className="fixed h-full w-full z-[-1] object-cover"
      />
      <div className="sidebar mx-auto pt-[24px]">
        <div className="w-full flex items-center justify-between">
          <div
            className="w-full cursor-pointer"
            onClick={handleCloseSidebar} // Utilisation de la fonction
          >
            <Image alt="" src="/img/svg/close.svg" width={35} height={38} />
          </div>
          <Image
            alt="logo"
            src="/img/svg/cbkLogo.svg"
            width={110}
            height={48}
            className="max-w-max"
          />
          <div className="w-full flex justify-end gap-2  items-center ">
            <Links link="#" variant="externe">
              RESUME
            </Links>
            <HiOutlineExternalLink size={18} />
          </div>
        </div>
        <div className="space-y-[40px] mt-[57px]">
          <ul className="flex flex-col gap-[30px]">
            <Link href="#header" onClick={handleCloseSidebar}>
              <Typographie
                className="font-calfine uppercase cursor-pointer"
                variant="h4"
                theme="secondary"
                textEffect="large"
              >
                Home
              </Typographie>
            </Link>
            <Link href="#aboutme" onClick={handleCloseSidebar}>
              <Typographie
                className="font-calfine uppercase cursor-pointer"
                variant="h4"
                theme="secondary"
                textEffect="large"
              >
                About me
              </Typographie>
            </Link>
            <Link href="#myskills" onClick={handleCloseSidebar}>
              <Typographie
                className="font-calfine uppercase cursor-pointer"
                variant="h4"
                theme="secondary"
                textEffect="large"
              >
                My skills
              </Typographie>
            </Link>
            <Link href="#mywork" onClick={handleCloseSidebar}>
              <Typographie
                className="font-calfine uppercase cursor-pointer"
                variant="h4"
                theme="secondary"
                textEffect="large"
              >
                My work
              </Typographie>
            </Link>
            <Link href="#form" onClick={handleCloseSidebar}>
              <Typographie
                className="font-calfine uppercase cursor-pointer"
                variant="h4"
                theme="secondary"
                textEffect="large"
              >
                Contact
              </Typographie>
            </Link>
          </ul>
          <div className="w-[full] flex flex-col gap-[15px]">
            <Links link="#" className="w-full" variant="underline">
              Instagram
            </Links>
            <Links link="#" className="w-full" variant="underline">
              Github
            </Links>
            <Links link="#" className="w-full" variant="underline">
              Linkedin
            </Links>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
