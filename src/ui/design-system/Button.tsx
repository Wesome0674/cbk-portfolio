import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium";
  inputType?: "button" | "submit" | "reset";
  variant?: "accent" | "outline";
  icon?: { icon: React.ElementType };
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean; // Ajout de la prop disabled
}

export const Button = ({
  size = "medium",
  className,
  inputType = "button",
  variant = "accent",
  icon,
  iconPosition = "right",
  children,
  disabled = false, // Valeur par défaut pour disabled
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyles = clsx(
        "bg-tercery text-primary rounded-full border border-primary font-medium button-outline",
        disabled && "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
      );
      break;
    case "outline":
      variantStyles = clsx(
        "bg-none border border-primary text-primary rounded-full font-medium",
        disabled && "border-gray-300 text-gray-500 cursor-not-allowed"
      );
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
        type={inputType}
        className={clsx(
          variantStyles,
          sizeStyles,
          iconSize,
          className,
          "group w-fit"
        )}
        disabled={disabled} // Ajout de l'attribut disabled
      >
        <div
          className={clsx(
            icon && "flex items-center gap-2 justify-center",
            !icon && "flex items-center group-hover:gap-[5px]"
          )}
        >
          {icon && iconPosition === "left" && <icon.icon size={iconSize} />}

          {!icon ? (
            <>
              <Image
                className={clsx(
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  disabled && "hidden" // Cache l'animation si désactivé
                )}
                src="/img/svg/star.svg"
                alt=""
                width={12}
                height={12}
              />
              <div
                className={clsx(
                  "w-0 h-[1px] bg-primary opacity-0 group-hover:opacity-100 group-hover:w-[12px] group-hover:visible transition-all duration-300 ease-in-out",
                  disabled && "hidden" // Cache l'animation si désactivé
                )}
              ></div>
            </>
          ) : (
            ""
          )}

          {children}

          {!icon ? (
            <>
              <div
                className={clsx(
                  "w-0 h-[1px] bg-primary opacity-0 group-hover:opacity-100 group-hover:w-[12px] group-hover:visible transition-all duration-300 ease-in-out",
                  disabled && "hidden" // Cache l'animation si désactivé
                )}
              ></div>
              <Image
                className={clsx(
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  disabled && "hidden" // Cache l'animation si désactivé
                )}
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
