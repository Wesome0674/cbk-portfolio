import React from "react";
import { ImportantText } from "../design-system/ImportantText";
import { Typographie } from "../design-system/Typographie";
import Image from "next/image";
import { Links } from "../design-system/Links";
import { Inputs } from "../design-system/Inputs";
import { Button } from "../design-system/Button";
import { IoIosSend } from "react-icons/io";

const Form = () => {
  return (
    <div className="w-full min-h-screen mt-[305px] ">
      <div className="mx-auto w-fit space-y-[40px]">
        <div className="flex flex-col items-center gap-[30px] relative handshow">
          <ImportantText img="/img/png/Wave-Marker.png">
            <Typographie
              variant="h6"
              theme="secondary"
              className="uppercase"
              weight="medium"
            >
              Contact me
            </Typographie>
          </ImportantText>
          <Typographie
            textEffect="large"
            className="font-calfine uppercase text-center"
            variant="h3"
            theme="secondary"
          >
            Let’s work together and bring
            <Typographie variant="h3" theme="tercery">
              {" "}
              your ideas to life
            </Typographie>
          </Typographie>
          <div className="w-fit relative">
            <Typographie className="max-w-[434px] text-center">
              “Contact me or my agency,{" "}
              <Links link="https://frontend-axis.vercel.app" variant="externe" className="inline-block">
                Axis Studio
              </Links>
              , to turn your vision into reality.
            </Typographie>
            <Image
              alt=""
              src="/img/svg/magic.svg"
              width={18}
              height={18}
              className="absolute right-[28%] bottom-0"
            />
          </div>
        </div>
        <form action="" className="max-w-[580px] space-y-[18px] mx-auto handwrite relative">
          <div className="flex items-center gap-[10px]">
            <Inputs
              typeOfInput="text"
              icon="/img/svg/nameInput.svg"
              placeHolder="Enter Your name"
            />
            <Inputs
              typeOfInput="text"
              icon="/img/svg/envelope.svg"
              placeHolder="Enter Your Email"
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <Inputs
              typeOfInput="text"
              icon="/img/svg/job.svg"
              placeHolder="Business name"
            />
            <Inputs
              typeOfInput="text"
              icon="/img/svg/mobile.svg"
              placeHolder="Phone Number"
            />
          </div>
          <Inputs
            className="h-[200px]"
            typeOfInput="textarea"
            icon="/img/svg/messages.svg"
            placeHolder="Enter you’re message"
          />
          <Button icon={{ icon: IoIosSend }} className="w-full text-primary">
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
