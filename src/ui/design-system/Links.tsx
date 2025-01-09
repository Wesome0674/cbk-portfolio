import clsx from "clsx";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

interface Props {
  variant?: "normal" | "underline" | "footer" | "externe";
  link: string;
  icon?: { icon: React.ElementType };
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export const Links = ({
  className,
  link,
  variant = "normal",
  iconPosition = "right",
  children,
}: Props) => {
  let variantStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "normal":
      variantStyles = " text-primary text-base uppercase font-normal";
      break;
    case "underline":
      variantStyles = " text-primary text-base font-normal";
      iconSize = 20;
      break;
    case "footer":
      variantStyles =
        " text-primary text-secondary  font-calfine text-[40px] text-large-effect";
      break;
    case "externe":
      variantStyles = " text-primary text-base font-normal underline";
      break;
  }

  return (
    <>
      {variant !== "footer" ? (
        <Link
          href={link}
          type="link"
          className={clsx(variantStyles, iconSize, className)}
        >
          <>
            <div
              className={clsx(
                "link",
                variant === "underline" && "flex items-center justify-between"
              )}
            >
              {variant === "underline" && iconPosition === "left" && (
                <CgArrowTopRight size={iconSize} />
              )}
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">{children}</span>
                  <span className="link-title2 title">{children}</span>
                </div>
              </span>
              {variant === "underline" && iconPosition === "right" && (
                <CgArrowTopRight size={iconSize} />
              )}
            </div>
            {variant === "underline" && (
              <div className="w-full h-[1px] bg-primary mt-[10px]"></div>
            )}
          </>
        </Link>
      ) : (
        <Link
          href={link}
          type="link"
          className={clsx(variantStyles, iconSize, className)}
        >
          {children}
        </Link>
      )}
    </>
  );
};
