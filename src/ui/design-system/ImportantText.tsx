import clsx from "clsx";
import Image from "next/image";

interface Props {
  img: string;
  className?: string;
  children?: React.ReactNode;
}

export const ImportantText = ({ className, img, children }: Props) => {
  return (
    <>
      <span className={clsx(className, " w-fit")}>
        {children}
         <Image alt="" src={img} width={50} height={50} className="w-full translate-y-[-3px]" />
      </span>
    </>
  );
};
