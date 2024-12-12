import clsx from "clsx";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";

interface Props {
  variant?: "contact" | "top";
  className?: string;
}

export const CtaScroll = ({ className, variant }: Props) => {
  return (
    <>
      {variant === "contact" && (
        <>
          <Image style={{width: "clamp(100px ,7.448vw, 143px)", aspectRatio: "1/1"}} className="cursor-pointer" alt="" src="/img/svg/ctaContact.svg" width={143} height={143} />
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
