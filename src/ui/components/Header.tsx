"use client";

import React, { useEffect, useRef } from "react";
import { Typographie } from "../design-system/Typographie";
import { Button } from "../design-system/Button";
import Image from "next/image";
import NavBar from "./navigation/NavBar";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

  useEffect(() => {
    if (headerRef.current) {
      imagesRef.current.forEach((image, index) => {
        if (!image) return;
        gsap.to(image, {
          y: index % 2 === 0 ? -300 : 300,
          rotation: index % 2 === 0 ? 20 : -20,
          ease: "power1.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "300%",
            scrub: 0.5,
          },
        });
      });
    }

    // Animation pour la rotation des logos toutes les 1,5 secondes
    const rotateLogos = gsap.timeline({
      repeat: -1, // Infinite repeat
      repeatDelay: 0.8, // Délai entre les répétitions
    });

    rotateLogos
      .to(".rotate-logo", {
        rotation: 360,
        duration: 0.8, // Durée d'une rotation complète
        ease: "none",
      })
      .to(".rotate-logo", {
        rotation: 0,
        duration: 0, // Retour à 0 avant de redémarrer
      });
  }, []);

  return (
    <header
      ref={headerRef}
      id="header"
      className="w-full min-h-screen relative mb-[100px]"
    >
      <Image
        ref={setImageRef}
        alt=""
        src="/img/png/headerImg1.png"
        width={175}
        height={193}
        className="absolute top-[64.815%] left-[67.708%]"
      />
      <Image
        ref={setImageRef}
        alt=""
        src="/img/png/headerImg2.png"
        width={405}
        height={366}
        className="absolute top-[74.074%] left-[13.021%]"
      />
      <Image
        ref={setImageRef}
        alt=""
        src="/img/png/headerImg3.png"
        width={252}
        height={279}
        className="absolute top-[41.667%] left-[78.125%]"
      />
      <Image
        ref={setImageRef}
        alt=""
        src="/img/png/headerImg4.png"
        width={161}
        height={159}
        className="absolute top-[55.556%] left-[20.438%]"
      />
      <Image
        ref={setImageRef}
        alt=""
        src="/img/png/headerImg5.png"
        width={188}
        height={241}
        className="absolute top-[83.333%] left-[75.521%]"
      />
      <NavBar />

      <div className="space-y-[200px]">
        <div className="flex pt-[305px] flex-col  w-fit mx-auto items-center gap-[30px]">
          <div className="flex flex-col items-center gap-[10px]">
            <Typographie
              className="text-center font-calfine uppercase"
              variant="h1"
              theme="secondary"
              textEffect="large"
            >
              I’m a creative web <br />
              <Typographie
                variant="h1"
                theme="tercery"
                textEffect="large"
                className="font-calfine uppercase"
              >
                developper
              </Typographie>
            </Typographie>
            <div className="flex items-center gap-2">
              <Image
                alt="logo"
                src="/img/svg/long.svg"
                width={14}
                height={19.09}
                className="rotate-logo"
              />
              <Typographie variant="link" weight="medium">
                BASED IN FRANCE
              </Typographie>
              <Image
                alt="logo"
                src="/img/svg/long.svg"
                width={14}
                height={19.09}
                className="rotate-logo"
              />
            </div>
          </div>

          <Typographie className="uppercase text-center max-w-[776px] ">
            Hi i’m Boularand Killian, a 18 year old young man passionate about
            Web technologies and Entrepreneurship. Ready to take this journey
            with me to discover my personal world and what i do ?
          </Typographie>
          <div className="flex items-center gap-[20px]">
            <Link href="#mywork">
              <Button>MY WORK</Button>
            </Link>
            <Link href="#myskills">
              <Button variant="outline">MY SKILLS</Button>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-[5px] ">
          <Typographie variant="h6">Explore More</Typographie>
          <Image
            alt=""
            className="h-[43px] w-[43px]"
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
