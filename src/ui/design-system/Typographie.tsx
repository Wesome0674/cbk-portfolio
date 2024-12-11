import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "link"
    | "body-base"
    | "body-sm";

  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "a"
    | "div";
  weight?: "light" | "regular" | "medium" | "bold" | "black";
  textEffect?: "none" | "small" | "medium" | "large";
  className?: string;
  theme?: "primary" | "secondary" | "tercery";
  children: React.ReactNode;
}

export const Typographie = ({
  variant = "body-base",
  component: Component = "div",
  textEffect = "none",
  weight = "regular",
  theme = "primary",
  className,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "",
    weightStyles: string = "",
    shadowstyle: string = "";

  switch (theme) {
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
    case "tercery":
      colorStyles = "text-tercery";
      break;
  }

  switch (textEffect) {
    case "none":
      shadowstyle = "";
      break;
    case "small":
      shadowstyle = "text-small-effect";
      break;
    case "medium":
      shadowstyle = "text-medium-effect";
      break;
    case "large":
      shadowstyle = "text-large-effect";
      break;
  }

  switch (weight) {
    case "light":
      weightStyles = "font-light";
      break;
    case "regular":
      weightStyles = "font-normal";
      break;
    case "medium":
      weightStyles = "font-medium";
      break;
    case "bold":
      weightStyles = "font-bold";
      break;
    case "black":
      weightStyles = "font-black";
      break;
  }

  switch (variant) {
    case "display":
      variantStyles = "text-4xl";
      break;
    case "h1":
      variantStyles = "text-3.5xl";
      break;
    case "h2":
      variantStyles = "text-3xl";
      break;
    case "h3":
      variantStyles = "text-2xl";
      break;
    case "h4":
      variantStyles = "text-xl";
      break;
    case "h5":
      variantStyles = "text-md";
      break;
    case "h6":
      variantStyles = "text-tag";
      break;
    case "link":
      variantStyles = "text-link";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        weightStyles,
        shadowstyle,
        className
      )}
    >
      {children}
    </Component>
  );
};
