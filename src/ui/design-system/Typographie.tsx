"use client";

import clsx from "clsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    | "body-sm"
    | "date";
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
  // Styles par défaut
  let variantStyles: string = "",
    colorStyles: string = "",
    weightStyles: string = "",
    shadowstyle: string = "",
    aosAnimation: string = "";

  // Initialiser AOS pour l'animation
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  // Définir les styles en fonction des props
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
      aosAnimation = "zoom-in-up";
      break;
    case "h2":
      variantStyles = "text-3xl";
      aosAnimation = "fade-up-right";
      break;
    case "h3":
      variantStyles = "text-2xl";
      aosAnimation = "zoom-in-up";
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
    case "date":
      variantStyles = "text-date";
      aosAnimation = "zoom-out-right";

      break;
  }

  return (
    <Component
      data-aos={aosAnimation} // Ajout de l'animation AOS
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
