import clsx from "clsx";

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
      variantStyles = "bg-tercery text-primary rounded-full border border-primary font-medium button-outline";
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
      sizeStyles = "text-base py-[10px] px-[30px]";
      iconSize = 18;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles, sizeStyles, iconSize, className)}
      >
        <>
          <div className={clsx(icon && "flex items-center gap-2 justify-center")}>
            {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
          </div>
        </>
      </button>
    </>
  );
};
