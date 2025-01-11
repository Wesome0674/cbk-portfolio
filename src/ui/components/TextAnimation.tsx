"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  const words = ["developer", "designer", "entrepreneur"];
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentWordIndex = 0;

    const animateText = () => {
      if (!textRef.current) return;

      const currentWord = words[currentWordIndex];
      const letters = currentWord.split("");

      // Créez les spans pour chaque lettre
      textRef.current.innerHTML = letters
        .map((letter) => `<span class='letter'>${letter}</span>`)
        .join("");

      // Animation des lettres avec GSAP
      const timeline = gsap.timeline({
        onComplete: () => {
          // Passer au mot suivant après l'animation
          currentWordIndex = (currentWordIndex + 1) % words.length;
          setTimeout(animateText, 700); // Pause avant le mot suivant
        },
      });

      timeline
        .fromTo(
          ".letter",
          { y: "1.1em", opacity: 0 },
          {
            y: "0em",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05, // Délai entre chaque lettre
          }
        )
        .to(".letter", {
          y: "-1.1em",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          stagger: 0.05,
        });
    };

    // Lancer la première animation
    animateText();
  }, []); // Si tu veux ignorer words dans les dépendances

  return (
    <div
      ref={textRef}
      className="text-animation font-calfine uppercase text-center"
    ></div>
  );
};

export default TextAnimation;
