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
      <div
        className={clsx(
          className,
          "px-[17px] w-full py-[13px] border-2 border-primary text-medium-effect bg-secondary rounded-[10px]"
        )}
      >
        <div className="flex w-full h-full items-start gap-[10px]">
          <Image alt="" width={18} height={18} src={icon} />
          {typeOfInput === "textarea" ? (
            <textarea
              placeholder={placeHolder}
              className={clsx(
                "outline-none resize-none bg-transparent text-[16px] h-full w-full text-primary"
              )}
            />
          ) : (
            <input
              placeholder={placeHolder}
              type={typeOfInput}
              className={clsx(
                "outline-none bg-transparent text-[16px] h-full w-full text-primary"
              )}
            />
          )}
        </div>
      </div>
    </>
  );
};
