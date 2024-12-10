import clsx from "clsx";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

interface Props {
  variant?: "normal" | "underline" | "footer" | "externe";
  icon?: { icon: React.ElementType };
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export const Links = ({
  className,
  variant = "normal",
  iconPosition = "right",
  children,
}: Props) => {
  let variantStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "normal":
      variantStyles = "text-base uppercase font-normal";
      break;
    case "underline":
      variantStyles = "text-base font-normal";
      iconSize = 20;
      break;
    case "footer":
      variantStyles =
        "text-secondary font-calfine text-[40px] text-large-effect";
      break;
    case "externe":
      variantStyles =
        "text-base font-normal underline";
      break;
  }

  return (
    <>
      <Link href="#"
        type="link"
        className={clsx(variantStyles, iconSize, className)}
      >
        <>
          <div
            className={clsx(
              variant === "underline" && "flex items-center justify-between",
              variant === "externe" && "flex items-center gap-[8px]"
            )}
          >
            {variant === "underline" && iconPosition === "left" && (
              <CgArrowTopRight size={iconSize} />
            )}
            {children}
            {variant === "underline" && iconPosition === "right" && (
              <CgArrowTopRight size={iconSize} />
            )}
          </div>
          {variant === "underline" && (
            <div className="w-full h-[1px] bg-primary mt-[15px]"></div>
          )}
        </>
      </Link>
    </>
  );
};
