"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface Props {
  variant?: "contact" | "top";
}

export const CtaScroll = ({ variant }: Props) => {
  const boxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let rotation = 0;
    const onScroll = () => {
      if (boxRef.current) {
        rotation += 3;
        gsap.to(boxRef.current, {
          rotation,
          duration: 0.1,
          ease: "none",
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {variant === "contact" && (
        <>
          <Link href="#form" className="z-50">
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
    </>
  );
};
