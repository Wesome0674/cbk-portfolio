'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { CgArrowTopRight } from 'react-icons/cg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
  variant?: 'normal' | 'underline' | 'footer' | 'externe';
  link: string;
  icon?: { icon: React.ElementType };
  iconPosition?: 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}

export const Links = ({
  className,
  link,
  variant = 'normal',
  iconPosition = 'right',
  children,
}: Props) => {
  let variantStyles: string = '',
    iconSize: number = 0;

  // Styles de variant
  switch (variant) {
    case 'normal':
      variantStyles = ' text-primary text-base uppercase font-normal';
      break;
    case 'underline':
      variantStyles = ' text-primary text-base font-normal';
      iconSize = 20;
      break;
    case 'footer':
      variantStyles =
        ' text-primary text-secondary font-calfine text-[40px] text-large-effect';
      break;
    case 'externe':
      variantStyles = ' text-primary text-base font-normal underline';
      break;
  }

  // Initialiser AOS pour l'animation flip-left
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
      {variant !== 'footer' ? (
        <Link
          href={link}
          type="link"
          data-aos="flip-left" // Ajout de l'animation flip-left à l'élément Link
          className={clsx(variantStyles, className)}
        >
          <>
            <div
              className={clsx(
                'link',
                variant === 'underline' && 'flex items-center justify-between'
              )}
            >
              {variant === 'underline' && iconPosition === 'left' && (
                <CgArrowTopRight size={iconSize} />
              )}
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">{children}</span>
                  <span className="link-title2 title">{children}</span>
                </div>
              </span>
              {variant === 'underline' && iconPosition === 'right' && (
                <CgArrowTopRight size={iconSize} />
              )}
            </div>
            {variant === 'underline' && (
              <div className="w-full h-[1px] bg-primary mt-[10px]"></div>
            )}
          </>
        </Link>
      ) : (
        <Link
          href={link}
          type="link"
          data-aos="flip-left" // Ajout de l'animation flip-left à l'élément Link
          className={clsx(variantStyles, className)}
        >
          {children}
        </Link>
      )}
    </>
  );
};
