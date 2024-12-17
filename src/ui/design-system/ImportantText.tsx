import clsx from "clsx";
import Image from "next/image";

interface Props {
  img: string;
  className?: string;
  children?: React.ReactNode;
}

export const ImportantText = ({ className, img, children }: Props) => {
  return (
    <span className={clsx(className, "relative inline-block")}>
      <span className="relative z-10">{children}</span>
      <Image
        alt=""
        src={img}
        width={50}
        height={50}
        className="absolute bottom-[2px] left-0 w-full h-[8px] translate-y-[5px] object-cover"
      />
    </span>
  );
};
