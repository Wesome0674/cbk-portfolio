"use client";

import clsx from "clsx";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface Props {
  variant?: "contact" | "top";
  className?: string;
}

export const CtaScroll = ({ className, variant }: Props) => {
  const boxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let rotation = 0; // Angle initial
    const onScroll = () => {
      if (boxRef.current) {
        rotation += 3; // Incrémente l'angle de rotation (ajustez cette valeur selon la vitesse souhaitée)
        gsap.to(boxRef.current, {
          rotation,
          duration: 0.1, // Animation rapide pour lisser l'effet
          ease: "none",
        });
      }
    };

    // Ajouter un écouteur d'événement pour le scroll
    window.addEventListener("scroll", onScroll);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {variant === "contact" && (
        <>
          <Link href="#form">
            <Image
              ref={boxRef}
              style={{
                width: "clamp(100px ,7.448vw, 143px)",
                aspectRatio: "1/1",
              }}
              className="cursor-pointer"
              alt=""
              src="/img/svg/ctaContact.svg"
              width={143}
              height={143}
            />
          </Link>
        </>
      )}
      {variant === "top" && (
        <>
          <div
            className={clsx(
              className,
              "rounded-full border cursor-pointer border-primary bg-tercery w-[88px] aspect-square flex items-center justify-center"
            )}
          >
            <div className="gap-[10px] flex items-center flex-col">
              <Image
                alt=""
                src="/img/svg/ArrowCta.svg"
                width={16}
                height={33}
              />
              <Typographie
                className="font-calfine"
                variant="h6"
                theme="primary"
              >
                TOP
              </Typographie>
            </div>
          </div>
        </>
      )}
    </>
  );
};
