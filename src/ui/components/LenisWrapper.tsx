'use client'; // Marque ce composant comme exécuté côté client
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>; // Render les enfants sans wrapper supplémentaire
}