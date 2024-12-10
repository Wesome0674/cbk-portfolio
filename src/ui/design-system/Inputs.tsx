import clsx from "clsx";
import Image from "next/image";

interface Props {
  icon: string;
  placeHolder: string;
  className?: string;
  typeOfInput: string;
}

export const Inputs = ({
  className,
  icon,
  typeOfInput,
  placeHolder,
}: Props) => {
  return (
    <>
      <div className="flex items-center gap-[10px] px-[17px] py-[13px] border-2 border-primary text-medium-effect bg-secondary rounded-[10px]">
        <Image alt="" width={18} height={18} src={icon} />
        <input 
          placeholder={placeHolder}
          type={typeOfInput}
          className={clsx(
            className,
            "outline-none bg-transparent text-[16px] text-primary"
          )}
        />
      </div>
    </>
  );
};
