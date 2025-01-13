"use client";

import React, { useEffect, useRef } from "react";
import { Typographie } from "../design-system/Typographie";
import { Button } from "../design-system/Button";
import Image from "next/image";
import NavBar from "./navigation/NavBar";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "./TextAnimation";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Fonction pour capturer les refs des images
  const setImageRef = (el: HTMLImageElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el); // Ajouter seulement les éléments non déjà dans le tableau
    }
  };

  const t = useTranslations(); // Récupère les traductions

  useEffect(() => {
    if (headerRef.current) {
      imagesRef.current.forEach((image, index) => {
        if (!image) return;

        gsap.to(image, {
          y: index % 2 === 0 ? "-15vh" : "15vh", // Déplacement vertical basé sur l'index avec unité relative
          scale: 1.1, // Légère mise à l'échelle
          rotation: index % 2 === 0 ? 10 : -10, // Rotation alternée
          ease: "power1.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "200%",
            scrub: 0.5,
          },
        });
      });
    }
  }, []);

  return (
    <header
      ref={headerRef}
      id="header"
      className="w-full min-h-screen relative"
    >
      {/* Images animées */}
      <div className="absolute top-[64.815%] left-[67.708%] w-[9vw] h-[9vw]">
        <Image
          ref={setImageRef}
          alt=""
          src="/img/png/headerImg1.png"
          layout="fill"
          className="object-contain hidden md:block"
        />
      </div>

      <div className="absolute top-[74.074%] left-[13.021%] w-[17vw] h-[17vw]">
        <Image
          ref={setImageRef}
          alt=""
          src="/img/png/headerImg2.png"
          layout="fill"
          className="object-contain hidden md:block"
        />
      </div>

      <div className="absolute top-[41.667%] left-[78.125%] w-[12vw] h-[12vw]">
        <Image
          ref={setImageRef}
          alt=""
          src="/img/png/headerImg3.png"
          layout="fill"
          className="object-contain hidden md:block"
        />
      </div>

      <div className="absolute top-[55.556%] left-[20.438%] w-[8vw] h-[8vw]">
        <Image
          ref={setImageRef}
          alt=""
          src="/img/png/headerImg4.png"
          layout="fill"
          className="object-contain hidden md:block"
        />
      </div>

      <div className="absolute top-[83.333%] left-[75.521%] w-[10vw] h-[10vw]">
        <Image
          ref={setImageRef}
          alt=""
          src="/img/png/headerImg5.png"
          layout="fill"
          className="object-contain hidden md:block"
        />
      </div>

      {/* Contenu principal */}
      <NavBar />

      <div className="space-y-[200px] relative z-20">
        <div className="flex pt-[305px] flex-col w-fit mx-auto items-center gap-[30px]">
          <div className="flex flex-col items-center gap-[10px]">
            <Typographie
              className="text-center font-calfine uppercase"
              variant="h1"
              theme="secondary"
              textEffect="large"
            >
              {t("header.titre1")} <br />
              <Typographie
                variant="h1"
                theme="tercery"
                textEffect="large"
                className="font-calfine uppercase"
              >
                <TextAnimation />
              </Typographie>
            </Typographie>
            <div className="flex items-center gap-2">
              <Image
                alt="logo"
                src="/img/svg/long.svg"
                width={14}
                height={19.09}
                className=" animate-spin"
              />
              <Typographie variant="link" weight="medium">
                {t("header.basedIn")}
              </Typographie>
              <Image
                alt="logo"
                src="/img/svg/long.svg"
                width={14}
                height={19.09}
                className=" animate-spin"
              />
            </div>
          </div>

          <Typographie className="uppercase text-center max-w-[776px]">
            {t("header.introText")}
          </Typographie>
          <div className="flex items-center gap-[20px]">
            <Link href="#mywork">
              <Button>{t("header.myWork")}</Button>
            </Link>
            <Link href="#myskills">
              <Button variant="outline">{t("header.mySkills")}</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <Typographie variant="h6">{t("header.exploreMore")}</Typographie>
          <Image
            alt=""
            className="h-[43px] w-[43px] seemore"
            src="/img/png/see.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
