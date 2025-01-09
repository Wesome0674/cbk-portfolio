import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium";
  variant?: "accent" | "outline";
  icon?: { icon: React.ElementType };
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium",
  className,
  variant = "accent",
  icon,
  iconPosition = "right",
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyles =
        "bg-tercery text-primary rounded-full border border-primary font-medium button-outline";
      break;
    case "outline":
      variantStyles =
        "bg-none border border-primary text-primary rounded-full font-medium";
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "text-sm py-[10px] px-[30px]";
      iconSize = 14;
      break;
    case "medium":
      sizeStyles = "text-base py-[10px] px-[25px]";
      iconSize = 18;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(
          variantStyles,
          sizeStyles,
          iconSize,
          className,
          "group w-fit"
        )}
      >
        <div
          className={clsx(
            icon && "flex items-center gap-2 justify-center",
            !icon && "flex items-center group-hover:gap-[5px]"
          )}
        >
          {icon && iconPosition === "left" && <icon.icon size={iconSize} />}

          {/* Éléments invisibles et de largeur zéro au départ, visibles et avec largeur augmentée au hover */}
          {!icon ? (
            <>
              <Image
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                src="/img/svg/star.svg"
                alt=""
                width={12}
                height={12}
              />
              <div className="w-0 h-[1px] bg-primary opacity-0 group-hover:opacity-100 group-hover:w-[12px] group-hover:visible transition-all duration-300 ease-in-out"></div>
            </>
          ) : (
            ""
          )}

          {children}

          {!icon ? (
            <>
              <div className="w-0 h-[1px] bg-primary opacity-0 group-hover:opacity-100 group-hover:w-[12px] group-hover:visible transition-all duration-300 ease-in-out"></div>
              <Image
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                src="/img/svg/star.svg"
                alt=""
                width={12}
                height={12}
              />
            </>
          ) : (
            ""
          )}
          {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
        </div>
      </button>
    </>
  );
};
